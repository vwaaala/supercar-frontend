<template>
  <div class="col-2 registered-users"  style="width: 100%">
    <strong>{{ $t('login.login_header') }}</strong>
    <div class="content">

      <p class="m-desc">{{ $t('login.login_desc') }}</p>
      <form>
        <ul class="form-list">
          <li>
            <label>{{ $t('login.login_email') }}<em class="required">*</em>
            </label>
            <input v-model="username" type="email" name="username" class="input-text required-entry validate-email"
                   title="Email Address" autocomplete="username">
          </li>
          <li>
            <label>{{ $t('login.login_password') }}<em class="required">*</em>
            </label>
            <input v-model="password" type="password" name="password" id="password"
                   class="input-text required-entry validate-password"
                   title="Password" autocomplete="password">
          </li>
        </ul>
      </form>
      <div class="error-msg" style="margin-bottom: 10px" v-if="this.login_error_message">
        {{ this.login_error_message }}
      </div>
      <div class="buttons-set">
        <button class="button login" title="Login" @click.prevent="do_login">
          <span>{{ $t('login.login_btn') }}</span>
        </button>

        <a href="#" class="forgot-word">{{ $t('login.login_forgot_pass') }}</a>
      </div>
      <!--buttons-set-->
    </div>
    <!--content-->
  </div>
</template>
<script>
import {getLoggedInData, login} from "@/services/auth";

export default {
  name: 'LoginForm',
  data: function () {
    return {
      username: null,
      password: null,
      login_error_message: null
    }
  },
  methods: {
    redirect() {
      if (getLoggedInData().type === 'admin') {
        window.location.pathname = 'admin'
      } else {
        this.$router.push('/dashboard')
      }
    },
    do_login: async function () {
      console.log('logging in....')

      login(this.username, this.password).then(() => {
        this.redirect()
      }).catch(error => {
        console.log('error data', error.response)
        if (error.response.status === 401) {
          this.login_error_message = this.$t('login.error.combination_mismatch')
        } else {
          this.login_error_message = this.$t('Login Failed')
        }
      })
    }
  }
}
</script>
