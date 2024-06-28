<template>
  <div class="create_container">
    <div class="create_screen">
      <div class="create_screen__content">
        <form class="reservation" @submit.prevent="submitForm">
          <h3>Register new reservation</h3>
          <div class="create-warning">
            <WarningMessage v-if="error" v-bind="{ msg: message }" />
          </div>
          <div class="reservation__field">
            <span class="field_name">Enter your name*</span>
            <input v-model="reservation.name" @focus="error = false" type="text" class="create_text__input" placeholder="Name" />
          </div>
          <div class="reservation__field">
            <span class="field_name">Select date and time*</span>
            <VueDatePicker class="reservation-time" :min-date="new Date()" :min-time="{ hours: 10, minutes: 0 }" :max-time="{ hours: 21, minutes: 0 }" format="yyyy-MM-dd HH:00" v-model="reservation.date" @focus="error = false" :enable-minutes="true" />
          </div>
          <div class="reservation__field">
            <span class="field_name">Select amount of persons*</span>
            <select v-model="reservation.persons"  @focus="error = false" class="reservation__select" name="persons" id="persons">
              <option selected value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="more">>12</option>
            </select>
          </div>
          <div class="reservation__field">
            <span class="field_name">Enter your email*</span>
            <input v-model="reservation.email"  @focus="error = false" type="text" class="create_text__input" placeholder="Email" />
          </div>
          <div class="reservation__field">
            <span class="field_name">Enter your phone number*</span>
            <input v-model="reservation.phone"  @focus="error = false" type="text" class="create_text__input" placeholder="Phone" />
          </div>
          <button class="reservation__submit">
            <span class="button__text">Submit Reservation</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import axios, { type AxiosResponse, AxiosError } from 'axios'
import WarningMessage from './WarningMessage.vue';

export default {
  components: {
    VueDatePicker,
    WarningMessage
  },
  
  data() {
    return {
      reservation: {
        name: '',
        date: new Date(),
        persons: 0,
        email: '',
        phone: '',
      },
      error: false,
      message: '',
      today: new Date(),
      threeMonthsFromToday: new Date(new Date().setMonth(new Date().getMonth() + 3)),
    };
  },

  watch: {
    '$route.query': {
      handler(newQuery) {
        this.$data.reservation.date = newQuery.date || new Date();
      },
      immediate: true
    }
  },

  methods: {
    async submitForm() {
      if (!this.reservation.name || !this.reservation.date || !this.reservation.phone || !this.reservation.email) {
        this.message = 'Please fill out all fields.';
        this.error = true;
        return;
      }

      await axios.post('/api/reservations', this.reservation)
        .then((response: AxiosResponse) => {
            console.log('Reservation submitted successfully: ', response.data);
            this.error = false;
            this.$router.push('/confirmReservation/create');
          })
        .catch((reason: AxiosError<{additionalInfo:string}>) => {
            this.error = true;
            console.log(reason.response!.status)
            if (reason.response!.status === 404) {
              this.message = 'All tables are booked for this day.';
            } else {
              this.message = 'Something went wrong. Please try again.';
            }
            console.error('Reservation submition error: ', reason.message);
          });
      }
  }
}
</script>

<style>
.create_container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-left: 10vh;
}

.create_screen {
  position: relative;
  height: 500px;
  width: 340px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
}

.create_screen__content {
  z-index: 1;
  position: relative;
  height: 500px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
}

.reservation {
  width: 350px;
  height: 440px;
  padding: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
}

.reservation__field {
  padding: 0px;
  position: relative;
  width: fit-content;
}

h3 {
  padding: 0px;
  position: relative;
  width: fit-content;
}

.field_name {
  display: grid;
  border-color: rgb(170, 174, 183);
  border-radius: 4px;
}

select {
  appearance: none;
  /* safari */
  -webkit-appearance: none;
  /* other styles for aesthetics */
  font-size: 1rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 4px;
  color: #0000006d;
  cursor: pointer;
  width: 260px;
}

option:checked {
  color: rgba(0, 0, 0, 0.888);
}

.reservation-time {
  width: 260px !important;
}

.create_text__input {
  appearance: none;
  /* safari */
  -webkit-appearance: none;
  /* other styles for aesthetics */
  font-size: 1rem;
  padding: 0.675em 1em 0.675em 1em;
  width: 260px;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 4px;
  color: #00000051;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.888);
}

.reservation__time {
  width: 260px;
}

.reservation__time:focus,
.reservation__select:focus {
  outline: none;
  border-color: #792e2e;
}

.reservation__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #792e2e;
  box-shadow: 0px 2px 2px #792e2e;
  cursor: pointer;
  width: 260px;
  transition: 0.2s;
}

.create-warning {
  height: 20px;
  padding: 0px;
}
</style>
