<template>
  <div class="cancel_container">
    <div class="cancel_screen">
      <div class="cancel_screen__content">
        <form class="cancel_reservation" @submit.prevent="submitForm">
          <h3>Cancel your reservation</h3>
          <div class="cancel-warning">
            <WarningMessage v-if="error" v-bind="{ msg: 'Something went wrong. Please try again' }" />
          </div>
          <button class="reservation__cancel">
            <span class="button__text">Cancel your reservation</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import WarningMessage from './WarningMessage.vue';

export default {
  components: {
    WarningMessage
  },

  data() {
    return {
      error: false,
    };
  },

  methods: {
    async submitForm() {
      try {
        const tokenId = this.$route.params.token;
        const response = await axios.delete('/api/reservations', { params : { reservationToken: tokenId } });
        console.log('Form submitted successfully:', response.data);
        this.$data.error = false;
        this.$router.push('/confirmReservation/cancel');
      } catch (error) {
        this.$data.error = true;
        console.error('Error submitting form:', error);
        // Handle error (e.g., show an error message)
      }
    },
  }
}
</script>

<style>
.cancel_container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-left: 10vh;
}

.cancel_screen {
  position: relative;
  height: 150px;
  width: 340px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
}

.cancel_screen__content {
  z-index: 1;
  position: relative;
  height: 150px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
}

.cancel_reservation {
  width: 340px;
  height: 100px;
  padding: 30px;
  padding-top: 24px;
  padding-bottom: 10px;
}

.reservation__time:focus,
.reservation__select:focus {
  outline: none;
  border-color: #792e2e;
}

.reservation__cancel {
  background: #fff;
  font-size: 14px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: #792e2e;
  box-shadow: 0px 2px 2px #792e2e;
  cursor: pointer;
  transition: 0.2s;
}

.cancel-warning {
  height: 20px;
  padding-bottom: 10px;
}
</style>
