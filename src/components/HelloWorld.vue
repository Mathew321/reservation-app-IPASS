<template>
  <div class="greetings">
    <h1 class="white">{{ msg }}</h1>
    <h3 class="white">Restaurant of authentic Belarusian cuisine</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.6rem;
  position: relative;
  top: -10px;
  text-shadow: 1px 1px 2px rgb(130, 32, 32);
}

h3 {
  font-size: 2.2rem;
  text-shadow: 1px 1px 2px brown;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
