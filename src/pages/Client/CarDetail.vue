<template>
  <div class="main-container col1-layout wow bounceInUp animated" v-if="item_details">
    <div class="main">
      <div class="col-main">
        <div class="product-view wow bounceInUp animated" itemscope="">
          <div id="messages_product_view"></div>
          <div class="product-essential container">
            <div class="row">
              <div class="product-img-box col-lg-5 col-sm-5 col-xs-12">
                <div class="row" style="height: 100%">
                  <ImageSlider :images="item_details.images"/>
                  <div class="col-md-12" style="bottom: 0">
                    <div class="toll-free"><a :href="'tel:'+$t('telephone')"><i
                        class="fa fa-phone"></i>{{ $t('telephone') }}</a>
                    </div>
                    <div class="ask-question"><a href="/contact-us"><i
                        class="fa fa-question"></i> {{ $t('car_details.question') }}</a></div>
                  </div>
                </div>
              </div>
              <div class="product-shop col-lg- col-sm-7 col-xs-12">
                <div class="brand">{{ item_details.brand.toUpperCase() }}</div>
                <div class="product-name">
                  <h1>{{ item_details.title }}</h1>
                </div>
                <div>
                  <div class="offer-id">
                    <span>Offer ID:</span>
                    <span class="id">{{ item_details.id }} </span>
                  </div>
                </div>

                <div class="price-block">
                  <div class="price-box">
                    <p class="special-price"><span class="price"> {{ get_local_currency(item_details.cash) }} </span>
                    </p>
                  </div>
                </div>

                <SpecificationsTable :header="$t('car_details.spec_header')" :data="item_details"
                                     :ignore="ignore_details"/>
                <PriceBreakdown
                    :cash="item_details.cash"
                    :leasing="item_details.leasing"
                    :credit="item_details.credit"/>

              </div>
            </div>
          </div>
          <div class="product-collateral container">
            <ul id="product-detail-tab" class="nav nav-tabs product-tabs">
              <li class="active">
                <a href="#product_tabs_description" data-toggle="tab" v-t="'car_details.desc'"></a>
              </li>
              <li><a href="#product_tabs_tags" data-toggle="tab" v-t="'car_details.tech_spec'"></a></li>
            </ul>
            <div id="productTabContent" class="tab-content">
              <div class="tab-pane fade in active" id="product_tabs_description">
                <div class="std" v-html="item_details.description">
                </div>
              </div>
              <div class="tab-pane fade" id="product_tabs_tags">
                <SpecificationsTable :data="item_details" :ignore="ignore_details"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ImageSlider from "@/components/Client/ImageSlider";
import SpecificationsTable from "@/components/Client/ItemDetails/SpecificationsTable";
import CarService from "@/services/car";
import PriceBreakdown from "@/components/Client/PriceBreakdown";
import {get_local_currency} from "./utils";

export default {
  name: "CarDetail",
  data: function () {
    return {
      item_details: null,
      ignore_details: [
        'title',
        'images',
        'description',
        'link',
        'cash',
        'credit',
        'leasing',
        'id',
        'approval',
        'image',
        'created_at',
        'last_updated'
      ]
    }
  },
  components: {PriceBreakdown, SpecificationsTable, ImageSlider},
  methods: {
    get_local_currency: get_local_currency
  },
  async created() {
    this.item_details = (await CarService.get_item(this.$route.params.id)).data
  }
}
</script>

<style scoped>
.offer-id {
  font-family: 'Saira Condensed', sans-serif;
  font-style: italic;
  color: #00a2ff;
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-top: 1.5rem;
}

.offer-id > span {
  /*font-size: 1.7rem;*/
  font-weight: 100;
  margin-right: 5px;
}

.offer-id > .id {

  font-size: 2.5rem;
  font-weight: 600;
}
</style>

