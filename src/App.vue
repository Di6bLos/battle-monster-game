<template>
  <h1>{{ greeting }}</h1>
  <section class="container">
    <div class="battle-display">
      <div class="player-card card">
        <h2>Player</h2>
        <div class="char-img"><img src="#" alt="player-image" /></div>
      </div>
      <div class="monster-card card">
        <h2>Monster</h2>
        <div class="char-img"><img src="#" alt="player-image" /></div>
      </div>
    </div>

    <div class="health-meters">
      <div class="health-gauge">
        <div id="player-hp" class="health-bar" :style="{'width': playerHealth + '%'}">{{ playerHealth }}</div>
      </div>
      <div id="monster-hp" class="health-gauge">
        <div class="health-bar" :style="{'width': monsterHealth + '%'}">{{ monsterHealth }}</div>
      </div>
    </div>

    <div class="game-controls">
      <div class="btn-row">
        <button class="btn" @click="playerAtk">Attack</button>
        <button class="btn" @click="specialAtk">Special</button>
      </div>
      <div class="btn-row">
        <button class="btn" @click="playerHeal">Heal</button>
        <button class="btn" @click="playerBlock">Block</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Monster Battle!",
      playerHealth: 100,
      monsterHealth: 100,
      attackMove: false,
    };
  },
  methods: {
    getRandomRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    playerAtk() {
      const attackPoints = this.getRandomRange(5, 12);
      this.monsterHealth -= attackPoints;

      this.monsterAtk();
    },
    specialAtk() {
      const attackPoints = this.getRandomRange(15, 23);
      this.monsterHealth -= attackPoints;
      this.monsterAtk();

    },
    playerHeal() {
      const healthPoints = this.getRandomRange(15, 19);
      this.playerHealth += healthPoints;
      this.monsterAtk();
    },
    playerBlock() {
      const blockedPoints = this.getRandomRange(8, 15);

      this.monsterAtk(blockedPoints);
    },
    monsterAtk(blocked) {
      setTimeout(() => {
        const attackPoints = this.getRandomRange(8, 15);
        blocked
          ? (this.playerHealth -= Math.abs(attackPoints - blocked))
          : (this.playerHealth -= attackPoints);
          console.log(attackPoints, blocked);
      }, 1000);
    },
  },
};
</script>

<style></style>
