<script setup lang="ts">
import ReservationCancellation from '@/components/ReservationCancellation.vue'
</script>

<template>
  <div class="about">
    <ReservationCancellation />
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
