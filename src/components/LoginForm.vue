<template>
  <div class="login_container">
    <div class="login_screen">
      <div class="login_screen__content">
        <form class="login" @submit.prevent="submitForm">
          <h3>Admin Access</h3>
          <div class="login-warning">
            <WarningMessage v-if="error" v-bind="{ msg: 'Invalid login or password!' }" />
          </div>
          <div class="login__field">
            <input type="text" v-model="username" class="login__input" placeholder="User name / Email" />
          </div>
          <div class="login__field">
            <input type="password" v-model="password" class="login__input" placeholder="Password" />
          </div>
          <div class="button_container">
            <button class="login__submit">
              <span class="button__text">Log In</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import WarningMessage from './WarningMessage.vue';

export default {
  components: {
    WarningMessage
  },

	data() {
	  return {
		username: '',
		password: '',
		error: false,
	  };
	},

  mounted () {
    
  },

  beforeMount() {
   //easter egg
   this.callPublicApi()
  },

  methods: {
    callPublicApi() {
      axios
      .get('https://catfact.ninja/fact')
      .then(response => console.log(response.data.fact))
    },

    async submitForm() {
      try {
        const response = await axios.post('/api/auth/accessToken', 
        {
          username: this.username,
          password: this.password
        });
        this.$data.error = false;
        const token = response.data.accessToken;
        localStorage.setItem('jwtToken', token);
        this.$router.push('../../admin/menu');
      } catch (error) {
          this.$data.username = ''
          this.$data.password = ''
          this.$data.error = true;
        }      
        return;
      },
  }
}
</script>

<style>
.login_container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-left: 10vh;
}

.login_screen {
  position: relative;
  height: 320px;
  width: 360px;
  box-shadow: 0px 0px 24px #5d2020;
  text-decoration: #792e2e;
}

.login_screen__content {
  z-index: 1;
  position: relative;
  height: 320px;
  background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
  background: rgba(204, 204, 204, 0.8);
}

.login {
  width: 350px;
  height: 340px;
  padding: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 100%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #792e2e;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 0px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  color: #792e2e;
  box-shadow: 0px 2px 2px #792e2e;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #792e2e;
  outline: none;
}

.button_container {
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: end;
}

.register {
  text-align: right;
  bottom: 20px;
  right: 0px;
  padding-right: 20px;
  color: #935e5e;
  font-style: italic;
}

.register:hover {
  color: #792e2e;
  font-style: italic;
  font-weight: bolder;
  cursor: pointer;
}

.login-warning {
  height: 20px;
  padding: 0px;
}
</style>
