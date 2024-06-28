<script setup lang="ts">
import TablesOverview from '@/components/TablesOverview.vue'
</script>

<template>
  <div class="about">
    <TablesOverview />
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
