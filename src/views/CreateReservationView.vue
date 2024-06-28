<script setup lang="ts">
import Reservation from '@/components/ReservationCreation.vue'
</script>

<template>
  <div class="about">
    <Reservation />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
