<template>
  <section class="winner-prompt">
    <h2>Game Over</h2>
    <h3>{{ winner }}</h3>
    <button class="btn" @click="$emit('restart')">Restart</button>
  </section>
</template>

<script>
export default {
  props: ["winner"],
};
</script>
