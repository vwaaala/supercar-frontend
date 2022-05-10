<template>

  <div class="toolbar bottom">
    <sort-by/>
    <ItemLimiter/>
  </div>
</template>

<script>
import SortBy from "@/components/Client/Listing/SortBy";
import ItemLimiter from "@/components/Client/Listing/ItemLimiter";

export default {
  name: "ListingBottomToolbar",
  components: {SortBy, ItemLimiter}
}
</script>

<style scoped>

</style>