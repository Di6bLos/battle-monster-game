<template>
  <section class="container">
    <div class="battle-display">
      <div class="player-card card">
        <h2>Player</h2>
        <div class="char-img" :class="{ attacking: playerMove, 'player-dmg': monsterMove}">
          <img id="player-image" src="../assets/images/NROL-47_Knight.png" alt="player-image" />
        </div>
      </div>
      <div class="monster-card card">
        <h2>Monster</h2>
        <div id="monster-image" class="char-img" :class="{ attacked: monsterMove, 'monster-dmg': playerMove}">
          <img src="../assets/images/640px-Troll_Wesnoth.png" alt="monster-image" />
        </div>
      </div>
    </div>

    <div class="health-meters">
      <div class="health-gauge">
        <div id="player-hp" class="health-bar" :style="playerHpStyle">
        </div>
      </div>
      <div id="monster-hp" class="health-gauge">
        <div class="health-bar" :style="monsterHpStyle">
          
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
