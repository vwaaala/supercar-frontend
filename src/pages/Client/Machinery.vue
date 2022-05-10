<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('menu.machinery')" :background="'/images/machineries-bg.jpg'"/>
    <router-view/>
    <ListingFooter/>
  </div>
</template>

<script>
import ClientHeader from "@/components/Client/ClientHeader";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";

export default {
  name: "Machinery",
  components: {
    ListingHeader,
    ListingFooter,
    ClientHeader
  }
}
</script>

<style scoped>

</style>