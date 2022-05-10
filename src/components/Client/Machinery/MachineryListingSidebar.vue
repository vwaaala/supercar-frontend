<template>
  <aside class="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
    <ListingCategories :categories="categories"/>
    <SideBarAdSlider/>
  </aside>
</template>

<script>
import ListingCategories from "@/components/Client/Listing/ListingCategories";
import SideBarAdSlider from "@/components/Client/Listing/SideBarAdSlider";
import MachineryService from "@/services/machinery";

export default {
  name: "MachineryListingSidebar",
  components: {SideBarAdSlider, ListingCategories},
  data: function () {
    return {
      categories: {},
    }
  },
  async created() {
    this.categories = (await MachineryService.get_categories()).data
  }
}
</script>

