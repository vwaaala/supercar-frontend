<template>
  <div>
    <div class="category-products machinery-products">
      <div class="loader-wrapper" v-if="loading">
        <loader class="loader2" size="64px"></loader>
      </div>
      <ul class="products-grid">

        <li v-for="item in items" :key="item.id"
            class="item col-lg-4 col-md-3 col-sm-4 col-xs-6">
          <div class="item-inner">
            <div class="item-img">
              <div class="item-img-info">
                <a class="product-image" :href="'./machinery/'+item.id">
                  <img :src="host+'/images/image_data/' + item.image" alt="">
                </a>
                <div class="sale-label sale-top-left offer-id">{{ item.id }}</div>
                <div class="item-box-hover">
                  <div class="box-inner">
                    <div class="add_cart">
                      <button class="button btn-cart" type="button"></button>
                    </div>
                    <div class="product-detail-bnt"><a class="button detail-bnt" :href="'./machinery/'+item.id"><span>Quick View</span></a>
                    </div>
                    <div class="actions">
                      <span class="add-to-links">
                        <a href="#" class="link-wishlist"
                           @click="add_to_wishlist(item)"><span>Add to Wishlist</span></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-info">
              <div class="info-inner">
                <div class="item-title">
                  <a :title="item.title" :href="'./cars/'+item.id" style="white-space: nowrap;">
                    {{ item.title }}
                  </a>
                </div>
                <div class="item-content">
                  <div class="item-price">
                    <div class="iprice-box">
                      <span class="regular-price"><span class="price">{{ item.cash }} PLN </span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
import MachineryService from "@/services/machinery";
import {mapState} from "vuex";
import {HOST} from "@/services/rest_api_service";
import {Gauge} from 'vue-loading-spinner'
import wishlist_service from "@/services/wishlist";
import {getLoggedInData} from "@/services/auth";

export default {
  name: "MachineryItemListing",
  components: {
    loader: Gauge
  },
  data: function () {
    return {
      items: [],
      sort_by: 'position',
      host: HOST,
      loading: true
    }
  },
  methods: {
    add_to_wishlist: function (item) {
      wishlist_service.add_item_to_wishlist(getLoggedInData().id, item.id, MachineryService.item_type).then(function () {
        alert('Item added to wishlist!')

      }).catch(error => {
        if (error.response.status === 409) {
          alert(error.response.data.detail)
        }
      })
    },
    get_items: async function (query_params) {
      this.loading = true;
      console.log('getting items: ', query_params)

      let response_data = (await MachineryService.get_items(query_params)).data
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

.machinery-products li.item{
  min-height: 300px !important;
}
</style>
<style scoped>
.offer-id {
  /*background: white;*/
  /*color: #449aff ;*/
  font-size: 22px;
  font-weight: 800;
  font-family: 'Saira Condensed', sans-serif;
}
</style>