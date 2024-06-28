<script setup lang="ts">
import AdminMenu from '@/components/AdminMenu.vue'
</script>

<template>
  <div class="about">
    <AdminMenu />
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
