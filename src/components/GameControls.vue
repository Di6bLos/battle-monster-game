<template>
  <div class="game-controls">
    <div class="btn-row">
      <button class="btn" :disabled="monsterTurn" @click="$emit('regAtk')">Attack</button>
      <button class="btn" :disabled="specialActive || monsterTurn" @click="$emit('splAtk')">{{ !specialActive && !monsterTurn? "Special" : "Charging" }}</button>
    </div>
    <div class="btn-row">
      <button class="btn" :disabled="!hasPotion" @click="$emit('usePotion')">Heal</button>
      <button class="btn" :disabled="monsterTurn" @click="$emit('isBlocking')">Block</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hasPotion", "specialActive", "playerAttacked", "monsterTurn"],
};
</script>
