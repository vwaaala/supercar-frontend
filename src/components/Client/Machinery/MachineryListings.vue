<template>
  <section class="main-container col2-left-layout bounceInUp animated">
    <!-- For version 1, 2, 3, 8 -->
    <!-- For version 1, 2, 3 -->
    <div class="container">
      <div class="row">
        <div class="col-main col-sm-9 col-sm-push-3 product-grid">
          <div class="pro-coloumn">
            <article class="col-main">
              <ListingTopToolbar/>
              <MachineryItemListing/>
              <ListingBottomToolbar/>
            </article>
          </div>
        </div>
        <MachineryListingSidebar/>
      </div>
    </div>
  </section>
</template>

<script>

import ListingTopToolbar from "@/components/Client/Listing/ListingTopToolbar";
import MachineryListingSidebar from "@/components/Client/Machinery/MachineryListingSidebar";
import ListingBottomToolbar from "@/components/Client/Listing/ListingBottomToolbar";
import MachineryItemListing from "@/components/Client/Machinery/MachineryItemListing";

export default {
  name: "MachineryListings",
  components: {
    MachineryListingSidebar,
    ListingBottomToolbar,
    MachineryItemListing,
    ListingTopToolbar
  }
}
</script>

<style scoped>

</style>