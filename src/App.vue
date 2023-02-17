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
        <div id="player-hp" class="health-bar">{{ playerHealth }}</div>
      </div>
      <div class="health-gauge">
        <div id="monster-hp" class="health-bar">{{ monsterHealth }}</div>
      </div>
    </div>

    <div class="game-controls">
      <div class="btn-col">
        <button class="btn" @click="playerAtk">Attack</button>
        <button class="btn">Special</button>
      </div>
      <div class="btn-col">
        <button class="btn">Heal</button>
        <button class="btn">Block</button>
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
    };
  },
  methods: {
    getRandomRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    playerAtk() {
      const attackPoints = this.getRandomRange(5, 12);
      this.monsterHealth -= attackPoints;
    }
  }
};
</script>

<style></style>
