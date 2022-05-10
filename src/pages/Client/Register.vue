<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('login.register_page_header')" background="/images/category-bg.jpg"/>

    <div class="main-container col1-layout wow bounceInUp animated animated" style="visibility: visible;">

      <div class="main">
        <div class="account-login container"  style="width: 50%">

          <form action="#" method="post" id="login-form" >
            <fieldset class="col2-set" style="width: 100% !important;">
              <RegisterForm/>
            </fieldset>
          </form>

        </div>
        <!--account-login-->

      </div>
      <!--main-container-->

    </div>
    <!--col1-layout-->


    <ListingFooter/>
  </div>
</template>

<script>

import RegisterForm from "@/components/Client/RegisterForm";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import ClientHeader from "@/components/Client/ClientHeader";

export default {
  name: "Register",
  components: {
    RegisterForm,
    ListingHeader,
    ListingFooter,
    ClientHeader
  }
}
</script>

<style>

@media (max-width: 700px) {
  .account-login.container {
    width: 100% !important;;
  }
}
</style>
