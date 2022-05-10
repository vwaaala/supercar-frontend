<template>
  <div class="col-1 new-users " style="width: 100%">
    <strong>{{ $t('login.register_header') }}</strong>
    <div class="content">
      <p class="m-desc">{{ $t('login.register_desc') }}</p>
      <form autocomplete="off">
        <ol class="form-list">
          <li>
            <label>{{ $t('login.register_full_name') }}<em class="required">*</em>
              <input v-model="full_name" type="text" class="input-text required-entry" @focus="reset_form">
            </label>
          </li>
          <li>
            <label>{{ $t('login.login_email') }}<em class="required">*</em>
            </label>
            <input v-model="email" type="email" class="input-text required-entry validate-email" @focus="reset_form">
          </li>
          <li>
            <label>{{ $t('login.login_password') }}<em class="required">*</em>
            </label>
            <input v-model="password" type="password" class="input-text required-entry validate-password"
                   @focus="reset_form" min="4">
          </li>
        </ol>
      </form>
      <div class="error-msg" v-if="this.error_message">
        {{ this.error_message }}
      </div>
      <div class="buttons-set">
        <button class="button create-account" title="Login" @click.prevent="create_account">
          <span>{{ $t('login.register_btn') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {create_account, login} from "@/services/auth";

export default {
  name: 'RegisterForm',
  data: function () {
    return {
      full_name: null,
      email: null,
      password: null,
      error_message: null
    }
  },
  methods: {
    create_account: async function () {
      create_account(this.full_name, this.email, this.password).then(response => {
        console.log('user created', response.data)
        login(this.email, this.password).then(() => {
          this.$router.push('/dashboard')
        })
      }).catch(error => {
        console.log('user creat error', error.response)
        if ([400, 409].includes(error.response.status)) {
          this.error_message = error.response.data.detail
        } else {
          this.error_message = this.$t('login.error.registration_failed')
        }
      })
    },
    reset_form: function () {
      this.error_message = ''
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none !important;
}
</style>

<style>

.m-desc {
  height: 80px;
}
</style>