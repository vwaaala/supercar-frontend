<template>
  <aside class="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
    <ListingFilter :filters="filters" :service="service"/>
    <ListingCategories :categories="categories"/>
    <SideBarAdSlider/>
  </aside>
</template>

<script>
import ListingFilter from "@/components/Client/Listing/ListingFilter";
import ListingCategories from "@/components/Client/Listing/ListingCategories";
import SideBarAdSlider from "@/components/Client/Listing/SideBarAdSlider";

export default {
  name: "CarListingSidebar",
  components: {SideBarAdSlider, ListingCategories, ListingFilter},
  props:['service'],
  data: function () {
    return {
      categories: {},
      filters: {}
    }
  },
  async created() {
    this.categories = (await this.service.get_categories()).data
    this.filters = (await this.service.get_filters()).data
  }
}
</script>

