<template>
  <div class="item-inner">
    <div class="item-img">
      <div class="item-img-info">
        <a class="product-image" :href="get_item_url">
          <img :src="host+'/images/image_data/' + item.image" alt="">
        </a>
        <div class="sale-label sale-top-left offer-id">{{ item.id }}</div>
        <div class="item-box-hover">
          <div class="box-inner">
            <div class="add_cart">
              <button class="button btn-cart" type="button"></button>
            </div>
            <div class="product-detail-bnt">
              <a class="button detail-bnt" :href="get_item_url"><span>Quick View</span></a>
            </div>
            <div class="actions">
                      <span class="add-to-links">
                        <a href="#" class="link-wishlist" title="Add to Wishlist" @click="add_to_wishlist(item)"><span>Add to Wishlist</span></a>
                      </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-info">
      <div class="info-inner">
        <div class="item-title">
          <a :title="item.title" :href="get_item_url" style="white-space: nowrap">
            {{ item.title }}
          </a>
        </div>
        <div class="item-content">
          <div class="item-price">
            <div class="iprice-box">
              <span class="regular-price"><span class="price">{{ item.cash }} PLN </span></span>
            </div>
          </div>
          <div class="other-info">
            <div class="col-km"><i class="fa fa-tachometer"></i> {{ item.mileage }}</div>
            <div class="col-engine"><i class="fa fa-gear"></i> {{ item.capacity }}</div>
            <div class="col-date"><i aria-hidden="true" class="fa fa-calendar"></i> {{ item.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wishlist_service from "@/services/wishlist";
import {getLoggedInData} from "@/services/auth";
import {HOST} from "@/services/rest_api_service";


export default {
  name: 'ListingItem',
  props: {
    item: {},
    item_path: String
  },
  data() {
    return {
      host: HOST,
    }
  },
  methods: {
    add_to_wishlist: function (item) {
      console.log("add_to_wishlist",item)
      wishlist_service.add_item_to_wishlist(getLoggedInData().id, item.id, this.item_path).then(function () {
        alert('Item added to wishlist!')

      }).catch(error => {
        if (error.response.status === 409) {
          alert(error.response.data.detail)
        }
      })
    }
  },
  computed: {
    get_item_url: function () {
      return `./${this.item_path}/${this.item.id}`
    }
  }
}
</script>
<style scoped>
.offer-id {
  /*background: white;*/
  /*color: #449aff ;*/
  font-size: 22px;
  font-weight: 800;
  font-family: 'Saira Condensed', sans-serif;
}
</style>