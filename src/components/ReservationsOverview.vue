<template>
  <div class="overview_container">
    <div class="overview_screen">
      <div class="overview_screen__content">
        <div class="overview_header_container">
          <h3>View Reservations</h3>
          <RouterLink class="blue back-link" to="./">&lt;&lt; Back</RouterLink>
        </div>
        <div class="reservations-date-picker">
          <span class="field_name">Select date*</span>
          <div class="date-picker-line">
            <VueDatePicker class="overview-date" :min-date="new Date()" format="dd.MM.yyyy" v-model="reservationDate" :enable-minutes="false" />
            <button class="overview_reservations__submit" @click="fetchReservations">
              <span class="button__text">Check Reservations</span>
            </button>
            <button
              class="overview_reservations__submit"
              @click="navigateToCreateReservation"
              style="background-color: rgba(204, 204, 204, 0.8)"
            >
              <span class="button__text">Create Reservation</span>
            </button>
          </div>
        </div>
        <div v-if="nonEmptyList" class="reservation-table-container">
          <EasyDataTable :headers="headers" :items="items" hide-footer>
            <template #item-cancel="item">
              <div class="cancel-wrapper">
                <img src="@/assets/delete.png" class="cancel-icon" @click="deleteItem(item)" />
              </div>
            </template>
          </EasyDataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import axios, { type AxiosResponse, AxiosError } from 'axios'
import EasyDataTable from 'vue3-easy-data-table'
import type { Item } from 'vue3-easy-data-table'
import VueDatePicker from '@vuepic/vue-datepicker'
import { formattedDate, formattedDateShort } from '@/util'

export default {
  components: {
    EasyDataTable,
    VueDatePicker
  },

  data() {
    return {
      reservationDate: new Date(),
      error: false,
      message: '',
      nonEmptyList: false,
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Persons', value: 'persons' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Cancel', value: 'cancel' }
      ],
      items: [
        {
          name: 'Stephen Curry',
          persons: 2,
          email: 'pheophan@drako.gu',
          phone: '06-010101010',
          token: ''
        },
        {
          name: 'Lebron James',
          persons: 6,
          email: 'chemodan@letit.gu',
          phone: '06-010101010',
          token: ''
        },
        {
          name: 'Kevin Durant',
          persons: 2,
          email: 'teoahl@fshevo.gu',
          phone: '06-010101010',
          token: ''
        },
        {
          name: 'Giannis Antetokounmpo',
          persons: 5,
          email: 'nogy@svelo.gu',
          phone: '06-010101010',
          token: ''
        }
      ]
    }
  },

  methods: {
    async fetchReservations() {
      try {
        const response = await axios.get(
          '/api/admin/reservations?reservationDate=' + formattedDateShort(this.$data.reservationDate),
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
            }
          }
        )
        var data = response.data
        this.$data.items = []
        Object.keys(data).forEach((key: any) => {
          let reservation = {
            name: data[key].customerName,
            persons: data[key].numberOfPersons,
            email: data[key].email,
            phone: data[key].phone,
            token: data[key].reservationToken
          }
          this.$data.items.push(reservation)
        })
        this.nonEmptyList = true
        this.error = false
      } catch (error) {
        console.error('Reservation submition error: ', error)
        this.nonEmptyList = false
        // this.errorMessage = 'Something went wrong. Please try again.'
        this.error = true
        // this.success = false
        return
      }
    },

    async deleteItem(val: Item) {
      await axios
        .delete('/api/reservations?reservationToken=' + val.token)
        .then((response: AxiosResponse) => {
          console.log('Reservation removed successfully: ', response.data)
          this.$data.items = this.$data.items.filter((obj) => {
            return obj.token !== val.token
          })
          this.error = false
        })
        .catch((reason: AxiosError<{ additionalInfo: string }>) => {
          this.error = true
          this.message = 'Something went wrong. Please try again.'
          console.error('Reservation submition error: ', reason.message)
        })
    },
    navigateToCreateReservation() {
      var upperPath = this.$route.path.replace('/admin/menu/ReservationsOverview', '/createReservation?date=' + formattedDate(this.$data.reservationDate))
      this.$router.push(upperPath)
    }
  }
}
</script>

<style>
.overview_container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
}

.overview_screen {
  position: relative;
  height: 550px;
  width: 600px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
}

.overview_screen__content {
  z-index: 1;
  position: relative;
  height: 550px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
}

.reservation {
  width: 600px;
  height: 440px;
  padding: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
}

.field_name {
  display: grid;
  border-color: rgb(170, 174, 183);
  border-radius: 4px;
}

.reservations-date-picker,
h3 {
  padding: 10px;
  position: relative;
}

.date-picker-line {
  display: inline-flex;
}

.reservations-date-picker,
.tables_submit {
  width: 300px;
}

.overview_reservations__submit {
  background: #fff;
  font-size: 14px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 180px;
  color: #792e2e;
  box-shadow: 0px 2px 2px #792e2e;
  cursor: pointer;
  transition: 0.2s;
}

.warning {
  height: 20px;
}

.cancel-wrapper .cancel-icon {
  width: 20px;
  cursor: pointer;
}

.reservation-table-container {
  padding: 10px;
}

.vue3-easy-data-table__main,
vue3-easy-data-table__body {
  height: 380px !important;
}

.overview-date {
  width: 200px;
}

.overview_header_container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
