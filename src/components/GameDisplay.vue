<template>
  <section class="container">
    <div class="battle-display">
      <div class="player-card card">
        <h2>Player</h2>
        <div class="char-img" :class="{attacking: playerMove}">
            <div v-if="playerMove" class="action-icon"></div>
          <img src="#" alt="player-image" />
        </div>
      </div>
      <div class="monster-card card">
        <h2>Monster</h2>
        <div class="char-img" :class="{attacked: monsterMove}">
            <div v-if="monsterMove" class="action-icon"></div>
          <img src="#" alt="monster-image" />
        </div>
      </div>
    </div>

    <div class="health-meters">
      <div class="health-gauge">
        <div id="player-hp" class="health-bar" :style="playerHpStyle">
          {{ playerHealth }}
        </div>
      </div>
      <div id="monster-hp" class="health-gauge">
        <div class="health-bar" :style="monsterHpStyle">
          {{ monsterHealth }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["playerHealth", "monsterHealth", "playerMove", "monsterMove"],
  computed: {
    playerHpStyle() {
      return { width: this.playerHealth + "%" };
    },
    monsterHpStyle() {
      return { width: this.monsterHealth + "%" };
    },
  },
};
</script>
