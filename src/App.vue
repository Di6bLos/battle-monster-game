<template>
  <h1>Monster Battle</h1>
  <game-display
  :player-health="playerHealth"
  :monster-health="monsterHealth"
  ></game-display>
  <restart-screen v-if="winner"
  :winner="winner"
  @restart="restartGame"
  ></restart-screen>
  <game-controls v-else
  :has-potion="healthPotion"
  @reg-atk="playerAtk"
  @spl-atk="specialAtk"
  @is-blocking="playerBlock"
  @use-potion="playerHeal"
  ></game-controls>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      roundCounter: 0,
      healthPotion: true,
      winner: null,
    };
  },
  watch: {
    // Once the player or monsters health hits 0 or less, declares the winner
    playerHealth(value) {
      if(value <= 0) {
        this.winner = "Monster Won";
      }
    },
    monsterHealth(value) {
      if(value <= 0) {
        this.winner = "Player Won";
      }
    }
  },
  methods: {
    // Reset data and restarts game
    restartGame(){
      this.playerHealth = 100,
      this.monsterHealth = 100,
      this.roundCounter = 0,
      this.healthPotion = true,
      this.winner = null
    },
    // Generates a random number between the given parameters
    getRandomRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // Player attacks the monster
    playerAtk() {
      const attackPoints = this.getRandomRange(5, 12);
      this.monsterHealth -= attackPoints;
      this.monsterAtk();
    },
    // A Special attack that deals more damage to the monster
    specialAtk() {
      const attackPoints = this.getRandomRange(15, 23);
      this.monsterHealth -= attackPoints;
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
      } else {
        this.monsterAtk();
        this.healthPotion = false;
      }
    },
    // The player has a chance of blocking some or all of the next attack
    playerBlock() {
      const blockedPoints = this.getRandomRange(8, 15);

      this.monsterAtk(blockedPoints);
    },
    // The monster attacks the plater
    monsterAtk(blocked) {
      setTimeout(() => {
        const attackPoints = this.getRandomRange(8, 15);
        blocked
          ? (this.playerHealth -= Math.abs(attackPoints - blocked))
          : (this.playerHealth -= attackPoints);
        console.log(attackPoints, blocked);
      }, 1000);
      this.roundCounter++;
    },
  },
};
</script>
