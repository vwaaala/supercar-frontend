<template>
  <div class="section-filter">
    <Gauge class="loader" v-if="loading"/>
    <div class="b-filter__inner ">
      <h2 v-if="service.item_type === 'truck'">{{ $t('filter.truck_header') }}</h2>
      <h2 v-else>{{ $t('filter.car_header') }}</h2>
      <form class="">
        <div class="btn-group bootstrap-select" style="width: 100%;"
             v-for="(values, name) in local_filters" :key="name">
          <v-select :options="values"
                    :labelTitle="$t('filter.select') +' '+ capitalizeFirstLetter(name)"
                    :showDefaultOption="true"
                    v-model="selected[name]"
                    @click.native="reset_select(name)"
          />
        </div>

        <!--        <div class="ui-filter-slider">-->
        <!--          <div class="sidebar-widget-body m-t-10">-->
        <!--            <div class="price-range-holder"> <span class="min-max"> <span class="pull-left">$200.00</span>-->
        <!--                          <span class="pull-right">$800.00</span> </span>-->
        <!--              <input class="price-slider" style="display:block" type="text" value="">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->


        <div class="btn-group reset-filter-btn" @click="reset_filter">{{ $t('filter.clear') }}</div>

        <div>
          <div class="btn-group search-btn">
            <button class="btn btn-lg btn-primary" @click="make_query($event)">{{ $t('filter.search') }}</button>
          </div>
        </div>
      </form>


    </div>
  </div>
</template>
<script>
import VSelect from '@alfsnd/vue-bootstrap-select'
import {capitalizeFirstLetter} from "@/services/utils";
import {Gauge} from 'vue-loading-spinner'

export default {
  name: 'ListingFilter',
  props: ['filters', 'service'],
  components: {
    VSelect, Gauge
  },
  data: function () {
    return {
      selected: {},
      local_filters: {},
      loading: false,
      brand_reset_toggle: true
    }
  },
  methods: {
    capitalizeFirstLetter: capitalizeFirstLetter,
    reset_filter: async function () {
      this.selected = {}
    },
    reset_select: function (name) {
      if (name === 'brand') {
        if (this.selected.brand) {
          this.brand_reset_toggle = !this.brand_reset_toggle
        }
        if (this.brand_reset_toggle) {
          console.log('resetting')
          this.selected = {}
        }
      }
    },
    make_query: function (event) {
      event.preventDefault()
      if (JSON.stringify(this.$route.query) === JSON.stringify(this.selected)) {
        return
      }
      this.$router.replace({query: this.selected})
    }
  }
  ,
  watch: {
    filters: function (new_val) {
      if (this.filters) {
        this.local_filters = new_val;
      }
    }
    ,
    selected: {
      async handler(new_val) {
        this.loading = true
        this.local_filters = (await this.service.get_filters(new_val)).data;
        this.loading = false
      }
      ,
      deep: true
    }
  }
}
</script>

<style>
.v-dropdown-item, .v-select-toggle > div {
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;

}

.v-select-toggle > div {
  /*height: 30px !important;*/
  color: #777;
  line-height: 3.3rem;
}

.v-select-toggle > .arrow-down {
  margin-top: 15px !important;
}

.reset-filter-btn {
  color: white;
  text-align: center;
  cursor: pointer !important;
  width: 100%;
  margin-bottom: 10px;
}

.search-btn {
  width: 100%;
}

.btn-group.search-btn > button {
  background: #d9eb3d;
  font-family: 'Saira Condensed', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  color: #3e6274;
  display: block;
  line-height: 38px;
  letter-spacing: 1px;
  border-radius: 0;
  border-bottom: 3px #c6d535 solid;
  padding: 10px 0px 8px 0px;
  width: 100%;
}

.loader {
  position: absolute !important;
  z-index: 99999999 !important;
  background: #ffffff4f;
  width: 100% !important;
  height: 100% !important;
}

.loader .spinner-inner {
  background: #fc6261;
}
</style>
