<template>
  <div class="container">
    <div class="admin_menu_screen">
      <div class="admin_menu_screen__content">
        <h3 class="admin_menu-header">Administrator Menu</h3>
        <nav class="admin_nav_container">
          <RouterLink class="blue admin-menu" to="../../admin/menu/tablesOverview">Check Tables Availability &gt;&gt;</RouterLink>
          <p />
          <RouterLink class="blue admin-menu" to="../../admin/menu/ReservationsOverview">View Reservations &gt;&gt;</RouterLink>
        </nav>
        <div class="logout_button_container">
          <button class="logout_submit" @click="logout">
            <span class="admin_button__text">Logout</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    logout() {
      localStorage.removeItem('jwtToken')
      this.$router.push("../../admin")
    }
  }
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-left: 10vh;
}

.admin_menu_screen {
  position: relative;
  height: 220px;
  width: 360px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
  align-items: center;
}

.admin_menu_screen__content {
  z-index: 1;
  position: relative;
  height: 220px;
  padding: 20px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
  align-items: center;
}

.logout_submit {
  background: #fff;
  font-size: 14px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  color: #792e2e;
  box-shadow: 0px 2px 2px #792e2e;
  cursor: pointer;
  transition: 0.2s;}

.logout_submit:active,
.logout_submit:focus,
.logout_submit:hover {
  border-color: #792e2e;
  outline: none;
}

.admin_menu-header {
  padding: 10px;
  padding-left: 0px;
  padding-bottom: 20px;
}

.logout_button_container {
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: end;
}

p {
  height: 10px;
}

.admin-menu {
  padding-bottom: 10px;
}

.admin_nav_container {
  margin-bottom: 20px;
}

span {
  width: fit-content;
}
</style>
