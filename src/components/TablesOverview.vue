<template>
  <div class="container">
    <div class="tables_screen">
      <div class="tables_screen__content">
        <form class="tables" @submit.prevent="submitForm">
          <div class="tables_header_container">
            <h3>View tables availability</h3>
            <RouterLink class="blue" to="./">&lt;&lt; Back</RouterLink>
          </div>
          <div class="tables__field">
            <span class="field_name">Select date*</span>
            <VueDatePicker :format="dateFormat" class="tables_time" v-model="reservation.date" :enable-minutes="true" />
          </div>
          <button class="tables__submit">
            <span class="button__text">Check Availability</span>
          </button>
        </form>
        <div class="info-block">
          <InfoMessage v-if="success" class="info" 
            v-bind="{ 
              freeTablesMorning: availableTablesMorning, 
              freeTablesEvening: availableTablesEvening, 
          }" />
          <WarningMessage v-if="error" class="warning" v-bind="{ msg: errorMessage }" />
        </div>
        <form v-if="success" class="goto-tables" @submit.prevent="navigateToReserveForm">
          <button class="tables__submit">
            <span class="button__text">Make Reservation</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios'
import InfoMessage from './InfoMessage.vue'
import WarningMessage from './WarningMessage.vue'
import { formattedDate } from '../util'

export default {
  components: {
    VueDatePicker,
    InfoMessage,
    WarningMessage
  },

  data() {
    return {
      reservation: {
        date: new Date(),
      },
      dateFormat: 'yyyy-MM-dd',
      error: false,
      success: false,
      errorMessage: '',
      availableTablesMorning: 0,
      availableTablesEvening: 0,
      tablesColorMorning: '',
      tablesColorEvening: '',
    };
  },

  methods: {
    async submitForm() {
      try {
        var selectedDate = this.reservation.date;
        var selectedMonth = selectedDate.getMonth() + 1; 
        const formattedDate = "" + selectedDate.getFullYear() + "-" + (selectedMonth < 10 ? "0" + selectedMonth : selectedMonth) + "-" + selectedDate.getDate();
        const response = await axios.get('/api/admin/reservations/tables?date='+ formattedDate, 
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
                }
            });
       
        this.error = false;
        this.success = true;
        this.availableTablesMorning = response.data.freeTablesMorning;
        this.availableTablesEvening = response.data.freeTablesEvening;
        this.tablesColorMorning = this.availableTablesMorning == 0 ? 'red' : 'blue';
        this.tablesColorEvening = this.availableTablesEvening == 0 ? 'red' : 'blue';
      } catch (error) {
        console.error('Reservation submition error: ', error);
        this.errorMessage = 'Something went wrong. Please try again.';
        this.error = true;
        this.success = false;
        return;
      }
    },
    async navigateToReserveForm() {
      var upperPath = this.$route.path.replace("/admin/menu/tablesOverview", "/createReservation?date=" + formattedDate(this.$data.reservation.date))
      this.$router.push(upperPath);
    },
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

.tables_screen {
  position: relative;
  height: 400px;
  width: 360px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
}

.tables_screen__content {
  z-index: 1;
  position: relative;
  height: 400px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
}

.tables {
  width: 350px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}

.goto-tables {
  width: 350px;
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.tables__field {
  padding: 5px 0px;
  position: relative;
}

.field_name {
  display: grid;
  border-color: rgb(170, 174, 183);
  border-radius: 4px;
}

.tables_time {
  width: 200px !important;
}

.tables__time:focus,
.tables__select:focus {
  outline: none;
  border-color: #792e2e;
}

.tables__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 10px;
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
  transition: 0.2s;
}

.info, .warning {
  padding: 30px;
  padding-top: 10px;
  padding-bottom: 0px;
  position: relative;
}

.info-block {
  padding-left: 20px;
}

.tables_header_container {
  display: flex;
  justify-content: space-between;
}
</style>
