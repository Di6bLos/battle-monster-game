<template>
  <h1>Monster Battle</h1>
  <section class="game-body">
    <game-display
      :player-health="playerHealth"
      :monster-health="monsterHealth"
      :player-move="playerAttacked"
      :monster-move="monsterAttacked"
    ></game-display>
    <!-- if the winner of the game is decided.
      Then this section pops up -->
    <restart-screen
      v-if="winner"
      :winner="winner"
      @restart="restartGame"
    ></restart-screen>
    <!-- When the game starts and no winner has been decided.
      This section will be desplayed. -->
    <game-controls
      v-else
      :has-potion="healthPotion"
      :monster-turn="btnDisabled"
      :player-blocked="playerBlocked"
      :special-active="specialAtkActive"
      @reg-atk="playerAtk"
      @spl-atk="specialAtk"
      @is-blocking="playerBlock"
      @use-potion="playerHeal"
    ></game-controls>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      playerAttacked: false,
      monsterAttacked: false,
      roundCounter: 1,
      healthPotion: true,
      winner: null,
      btnDisabled: false,
    };
  },
  watch: {
    // Once the player or monsters health hits 0 or less, declares the winner
    playerHealth(value) {
      // Make sure that all values are accounted for.
      // Ex: if (value === 0) { winner} wont work,
      // because it wont run the code unless the health falls exactly on 0.
      if (value <= 0) {
        this.playerHealth = 0;
        this.winner = "Monster Won";
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        this.monsterHealth = 0;
        this.winner = "Player Won";
      }
    },
  },
  computed: {
    specialAtkActive() {
      return this.roundCounter % 3;
    },
  },
  methods: {
    // Reset data and restarts game
    restartGame() {
      (this.playerHealth = 100),
        (this.monsterHealth = 100),
        (this.roundCounter = 1),
        (this.healthPotion = true),
        (this.winner = null);
    },
    // Generates a random number between the given parameters
    getRandomRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // Player attacks the monster
    playerAtk() {
      const attackPoints = this.getRandomRange(5, 12);
      this.monsterHealth -= attackPoints;
      this.playerAtkAnimation();
      this.monsterAtk();
    },
    // A Special attack that deals more damage to the monster
    specialAtk() {
      const attackPoints = this.getRandomRange(15, 23);
      this.monsterHealth -= attackPoints;
      this.playerAtkAnimation();
      this.monsterAtk();
    },
    // The player gets one chance to heal during the battle
    playerHeal() {
      // If the player has less than full health
      // and they havent used the potion.
      if (this.healthPotion && this.playerHealth < 100) {
        const healthPoints = this.getRandomRange(15, 19);
        this.playerHealth += healthPoints;
        this.healthPotion = false;
        this.monsterAtk();
        this.playerHealAnimation();
      } else {
        this.monsterAtk();
        this.playerHealAnimation();
        this.healthPotion = false;
      }
    },
    // The player has a chance of blocking some or all of the next attack
    playerBlock() {
      const blockedPoints = this.getRandomRange(8, 15);
      this.monsterAtk(blockedPoints);
      this.playerBlockAnimation();
    },
    // The monster attacks the plater
    monsterAtk(blocked) {
      // Makes sure the monster wont attack if its already dead
      if (this.monsterHealth > 0) {
        setTimeout(() => {
          const attackPoints = this.getRandomRange(8, 15);
          blocked
            ? (this.playerHealth -= Math.abs(attackPoints - blocked))
            : (this.playerHealth -= attackPoints);
          // this.monsterAtkAnimation();
        }, 1000);
        this.roundCounter++;
      }
    },
    // Adds a class to the player or monster
    // that will animate the attack sequence.
    playerAtkAnimation() {
      this.playerAttacked = true;
      setTimeout(() => {
        this.playerAttacked = false;
        setTimeout(() => {
          this.monsterAtkAnimation();
        }, 500);
      }, 300);
      this.btnDisabled = true;
      setTimeout(() => {
        this.btnDisabled = false;
      }, 1500);
    },
    playerBlockAnimation() {
      this.playerBlocked = true;
      setTimeout(() => {
        this.playerBlocked = false;
        setTimeout(() => {
          this.monsterAtkAnimation();
        }, 500);
      }, 300);
      this.btnDisabled = true;
      setTimeout(() => {
        this.btnDisabled = false;
      }, 1500);
    },
    playerHealAnimation() {
      this.playerBlocked = true;
      setTimeout(() => {
        this.playerBlocked = false;
        setTimeout(() => {
          this.monsterAtkAnimation();
        }, 500);
      }, 300);
      this.btnDisabled = true;
      setTimeout(() => {
        this.btnDisabled = false;
      }, 1500);
    },
    // Monsters animation gets triggered by the player animations, not the monster attacking
    monsterAtkAnimation() {
      if (this.monsterHealth > 0) {
        this.monsterAttacked = true;
        setTimeout(() => {
          this.monsterAttacked = false;
        }, 300);
      }
    },
  },
};
</script>
