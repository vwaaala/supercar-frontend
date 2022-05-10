<template>
<div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('menu.passenger_car')" background="/images/category-bg.jpg"/>
    <router-view/>
    <ListingFooter/>
  </div>
</template>

<script>

import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import ClientHeader from "@/components/Client/ClientHeader";

export default {
  name: "Cars",
  components: {
    ListingHeader,
    ListingFooter,
    ClientHeader
  }
}
</script>

<style scoped>

</style>