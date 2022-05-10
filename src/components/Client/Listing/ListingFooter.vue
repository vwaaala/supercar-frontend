<template>
  <footer>
    <InformativeFooter/>
    <BottomFooter/>
  </footer>
</template>

<script>


import BottomFooter from "@/components/Client/Listing/BottomFooter";
import InformativeFooter from "@/components/Client/InformativeFooter";

export default {
  name: "ListingFooter",
  components: {BottomFooter, InformativeFooter}
}
</script>

<style scoped>

</style>