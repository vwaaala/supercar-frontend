<template>
  <div>
    <div class="category-products">
      <div class="loader-wrapper" v-if="loading">
        <loader class="loader2" size="64px"></loader>
      </div>
      <ul class="products-grid">

        <li v-for="item in items" :key="item.id"
            class="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
          <ListingItem :item="item" :item_path="item_path"/>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {Gauge} from 'vue-loading-spinner'

import ListingItem from "@/components/Client/Listing/ListingItem";

export default {
  name: "CarTruckListing",
  props: ['service', 'item_path'],
  components: {
    ListingItem,
    loader: Gauge
  },
  data: function () {
    return {
      items: [],
      sort_by: 'position',
      loading: true
    }
  },
  methods: {
    get_items: async function (query_params) {
      this.loading = true;
      console.log('getting items: ', query_params)

      let response_data = (await this.service.get_items(query_params)).data
      console.log(response_data)
      this.items = response_data.items
      this.$store.state.total_pages = response_data.pages
      this.$store.state.limit = response_data.limit
      this.loading = false;
    }
  },
  computed: {
    ...mapState({
      limit: state => state.limit,
      page_no: state => state.page_no,
      total_pages: state => state.total_pages
    }),

  },
  watch: {
    '$route.query': {
      handler(old_val, new_value) {
        if (old_val === new_value) return

        console.log('Page Change: ', new_value)
        this.get_items(old_val)
      },
      deep: true
    }
  },
  created() {
    this.get_items(this.$route.query)
  },
}
</script>

<style>

.loader2 {
  position: absolute !important;
  z-index: 99999999 !important;
  background: #ffffff4f;
  left: 50%;
  top: 30vh;
}

.loader2 .spinner-inner {
  background: #fc6261;
}

.loader-wrapper {
  position: absolute;
  z-index: 99999;
  height: 100%;
  width: 100%;
  background: #f7f7f782;
}
</style>
