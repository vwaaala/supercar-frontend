<!--suppress JSUnfilteredForInLoop -->
<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="'WISH LIST'" :background="'/images/machineries-bg.jpg'"/>

    <div class="cart wow bounceInUp animated">

      <div class="table-responsive shopping-cart-tbl  container">
        <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr">
        <fieldset>
          <table id="shopping-cart-table" class="data-table cart-table table-striped">
            <colgroup>
              <col width="1">
              <col>
              <col width="1">
              <col width="1">
              <col width="1">
              <col width="1">
              <col width="1">

            </colgroup>
            <thead>
            <tr class="first last">
              <th rowspan="1">&nbsp;</th>
              <th rowspan="1"><span class="nobr">Product Name</span></th>
              <th class="a-center" colspan="1"><span class="nobr">Unit Price</span></th>
              <th class="a-center" colspan="1"><span class="nobr">Credit</span></th>
              <th class="a-center" colspan="1"><span class="nobr">Leasing</span></th>
              <th class="a-center" colspan="1"><span class="nobr"></span></th>
              <th rowspan="1" class="a-center">&nbsp;</th>
            </tr>
            </thead>
            <tfoot>
            <tr class="first last">
              <td colspan="50" class="a-right last">
                <button type="button" class="button btn-continue">
                  Continue
                </button>
                <button type="submit" class="button btn-empty" id="empty_cart_button" @click="clear_items()">
                  <span>Clear List</span>
                </button>

              </td>
            </tr>
            </tfoot>
            <tbody>

            <tr class="first last odd" v-for="(item, item_id) in items_details" :key="item_id">
              <td class="image hidden-table">
                <a href="" class="product-image">
                  <img :src="get_image_url(item.image)" alt="">
                </a>
              </td>
              <td>
                <h2 class="product-name">
                  <a :href="get_item_link(item)"> {{ item.title }}</a>
                </h2>
              </td>
              <td class="a-right hidden-table">
                <span class="cart-price"><span class="price">{{ get_local_currency(item.cash) }}</span></span></td>
              <td class="a-right hidden-table"><span class="cart-price">
                <span class="price"> {{ get_local_currency(item.credit) }} </span></span>
              </td>
              <td class="a-right hidden-table">
                <span class="cart-price"><span class="price"> {{ get_local_currency(item.leasing) }} </span></span>
              </td>
              <td class="a-center last">
                <a href="#" title="Remove item" class="button remove-item" @click="delete_item(item, item_id)">
                  <span>Remove item</span>
                </a>
              </td>
            </tr>

            </tbody>
          </table>

        </fieldset>
      </div>
    </div>

    <ListingFooter/>
  </div>
</template>

<script>
import ClientHeader from "@/components/Client/ClientHeader";
import ListingHeader from "@/components/Client/Listing/ListingHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import wishlist_service from "@/services/wishlist";
import {getLoggedInData} from "@/services/auth";
import CarService from "@/services/car";
import TruckService from "@/services/truck";
import MachineryService from "@/services/machinery";
import {get_image_url} from '@/services/rest_api_service';
import {get_local_currency} from "@/services/utils";


export default {
  name: "WishList",
  components: {
    ListingHeader,
    ListingFooter,
    ClientHeader,
  },
  data: function () {
    return {
      items: [],
      items_details: {}
    }
  },
  methods: {
    get_local_currency,
    get_image_url,
    clear_items() {
      for (let item_id in this.items_details) {
        wishlist_service.delete_item(this.items_details[item_id].wid)
        this.$delete(this.items_details, item_id)
      }
    },
    delete_item(item, item_id) {
      wishlist_service.delete_item(item.wid).then(() => alert('Item Removed!'))
      this.$delete(this.items_details, item_id)
    },
    get_item_link(item){
      return `/${item.link_prefix}/${item.id}`
    },
    async get_item_details() {
      for (let item of this.items) {
        let service = null;
        let item_prefix = null;

        if (item.item_type === 'cars') {
          service = CarService
          item_prefix = 'c'
        } else if (item.item_type === 'trucks') {
          service = TruckService
          item_prefix = 't'
        } else if (item.item_type === 'machinery') {
          service = MachineryService
          item_prefix = 'm'
        }
        // noinspection JSObjectNullOrUndefined
        service.get_item(item.item_id).then(response => {
          response.data.wid = item.id
          response.data.link_prefix = service.api_path
          this.$set(this.items_details, item_prefix + item.item_id, response.data)
        })

      }
    }
  },
  async created() {
    this.items = (await wishlist_service.get_items(getLoggedInData().id)).data
    console.log('wishlist items', this.items)
    // noinspection ES6MissingAwait
    this.get_item_details()
  }
}
</script>
<style scoped>

.product-name, .price {
  font-size: 1.2em !important;
}

</style>
<style>
#shopping-cart-table tr td {
  vertical-align: middle;
}

#shopping-cart-table .product-image img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
}

</style>