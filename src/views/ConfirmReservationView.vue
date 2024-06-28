<script setup lang="ts">
import ReservationConfirmation from '@/components/ReservationConfirmation.vue'
</script>

<template>
  <div class="about">
    <ReservationConfirmation />
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
