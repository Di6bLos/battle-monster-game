<template>
  <div class="game-controls">
    <div class="btn-row">
      <button class="btn" @click="$emit('regAtk')">Attack</button>
      <button class="btn" @click="$emit('splAtk')">Special</button>
    </div>
    <div class="btn-row">
      <button
        class="btn"
        :disabled="!hasPotion"
        @click="$emit('usePotion')">Heal</button>
      <button class="btn"
      @click="$emit('isBlocking')">Block</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasPotion: Boolean,
  },
};
</script>
