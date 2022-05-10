<template>
  <section class="main-container col2-left-layout bounceInUp animated">
    <div class="container">
      <div class="row">
        <div class="col-main col-sm-9 col-sm-push-3 product-grid">
          <div class="pro-coloumn">
            <article class="col-main">
              <ListingTopToolbar/>
              <CarTruckItemListing :service="service" :item_path="item_path"/>
              <ListingBottomToolbar/>
            </article>
          </div>
        </div>
        <CarListingSidebar :service="service"/>
      </div>
    </div>
  </section>
</template>

<script>
import ListingTopToolbar from "@/components/Client/Listing/ListingTopToolbar";
import ListingBottomToolbar from "@/components/Client/Listing/ListingBottomToolbar";
import CarListingSidebar from "@/components/Client/Car/CarListingSidebar";
import CarTruckItemListing from "@/components/Client/Listing/CarTruckItemListing";

import service from "@/services/car"

export default {
  name: "CarListings",
  data: function () {
    return {
      service: service,
      item_path: 'cars'
    }
  },
  components: {
    CarListingSidebar,
    ListingBottomToolbar,
    CarTruckItemListing,
    ListingTopToolbar
  }
}
</script>

<style scoped>

</style>