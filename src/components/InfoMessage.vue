<template>
  <div>
    <span class="blue"> Available tables in the morning: {{ freeTablesMorning }} </span>
  </div>
  <div>
    <span id="indent" class="blue"> Available seats in the morning: {{ freeTablesMorning*4 }} </span>
  </div>
  <div>
    <span class="blue"> Available tables in the evening: {{ freeTablesEvening }} </span>
  </div>
  <div>
    <span id="indent" class="blue"> Available seats in the evening: {{ freeTablesEvening*4 }} </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  freeTablesMorning: number,
  freeTablesEvening: number,
}>()
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

#indent {
  padding-left: 40px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
