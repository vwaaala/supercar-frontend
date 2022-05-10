<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="'404 Page'" :background="'/images/category-bg.jpg'"/>

    <section class="content-wrapper" style="background:#ffd83b">
      <div class="container">
        <div class="std">
          <div class="page-not-found">
            <br>
            <div><img src="/images/404-img.jpg" alt="error image"></div>
            <h3 v-t="'misc.not_found'"></h3>
            <div><a href="/" class="btn-home"><span v-t="'misc.back_home'"></span></a></div>
          </div>
        </div>
      </div>
    </section>


    <ListingFooter/>
  </div>
</template>

<script>
import ClientHeader from "@/components/Client/ClientHeader";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";

export default {
  name: "NotFound",
  components: {
    ListingHeader,
    ListingFooter,
    ClientHeader
  }
}
</script>

<style scoped>

</style>