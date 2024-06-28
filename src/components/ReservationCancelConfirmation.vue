<template>
  <div class="container">
    <div class="confirm_screen">
      <div class="confirm_screen__content">
          <h3 class="confirm_screen-header">Reservation Canceled!</h3>
          <p />
          <div class="confirm_screen-description">
            <span class="field_name">Your reservation was successfully canceled.</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-left: 10vh;
}

.confirm_screen {
  position: relative;
  height: 160px;
  width: 360px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
}

.confirm_screen__content {
  z-index: 1;
  position: relative;
  height: 160px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
}

.confirm_screen-header {
  width: 350px;
  height: 20px;
  padding: 30px;
  padding-top: 40px;
  padding-bottom: 10px;
}

.confirm_screen-description {
  padding: 20px
}
</style>
