<template>
  <section class="main-container col2-right-layout">
    <div class="main container">
      <div class="row">
        <section class="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated" style="visibility: visible;">
          <div class="my-account">

            <!--page-title-->
            <!-- BEGIN DASHBOARD-->
            <div class="dashboard" v-if="user">
              <div class="welcome-msg">
                <p class="hello"><strong>Hello, {{ user.name }}!</strong></p>
                <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account
                  activity and update your account information. Select a link below to view or edit information.</p>
              </div>
              <!--recent-orders-->
              <div class="box-account">
                <div class="page-title">
                  <h2>Account Information</h2>
                </div>
                <div class="col2-set">
                  <div class="col-1">
                    <div class="box">
                      <div class="box-title">
                        <h5>Contact Information</h5>
                        <a href="#">Edit</a>
                      </div>
                      <!--box-title-->
                      <div class="box-content">
                        <p> {{ user.name }}<br>
                          {{ user.username }}<br>
                          <a href="#">Change Password</a>
                        </p>
                      </div>
                      <!--box-content-->
                    </div>
                    <!--box-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import {get_current_user} from "@/services/auth";

export default {
  name: 'AccountInfo',
  data: function () {
    return {
      user: {}
    }
  },
  async created() {
    let data = (await get_current_user()).data
    console.log('data', data)

    this.user = data;
  }
}
</script>
