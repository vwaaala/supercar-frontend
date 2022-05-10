<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('login.login_page_header')" background="/images/category-bg.jpg"/>

    <div class="main-container col1-layout wow bounceInUp animated animated" style="visibility: visible;">

      <div class="main">
        <div class="account-login container"  style="width: 50%">

          <form action="#" method="post" id="login-form">
            <fieldset class="col2-set"  style="width: 100% !important;">
              <LoginForm/>
              <!--col-2 registered-users-->
            </fieldset>
            <!--col2-set-->
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
import LoginForm from "@/components/Client/LoginForm";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import ClientHeader from "@/components/Client/ClientHeader";

export default {
  name: "Login",
  components: {
    LoginForm,
    ListingHeader,
    ListingFooter,
    ClientHeader
  }
}
</script>

