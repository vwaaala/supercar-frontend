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
import CarTruckItemListing from "@/components/Client/Listing/CarTruckItemListing";
import CarListingSidebar from "@/components/Client/Car/CarListingSidebar";
import ListingBottomToolbar from "@/components/Client/Listing/ListingBottomToolbar";
import ListingTopToolbar from "@/components/Client/Listing/ListingTopToolbar";
import TruckService from "@/services/truck"

export default {
  name: "TruckListings",
  data: function () {
    return {
      service: TruckService,
      item_path: 'trucks'
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