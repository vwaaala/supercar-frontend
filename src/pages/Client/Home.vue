<template>
  <div id="page">
    <ClientHeader/>

    <splide :options="options">
      <splide-slide>
        <div style="background: url('images/slide-img1.jpg'); background-size: cover; height: 100%">
          <div class="content_slideshow" style="position: relative; top: 5%">
            <div class="row">
              <div class="col-lg-3 col-sm-3 col-md-3 "> &nbsp;</div>
              <div class="col-lg-9 col-sm-9 col-md-9">
                <div class="info">
                  <div class='tp-caption ExtraLargeTitle sft tp-resizeme '>
                    <span>Top Brands 2019</span>
                  </div>
                  <div class='tp-caption LargeTitle sfl tp-resizeme'><span>Modern-classic</span> incredible
                  </div>
                  <div class='tp-caption Title sft tp-resizeme'>Get 40% OFF on
                    selected items.
                  </div>
                  <div class='tp-caption sfb tp-resizeme'><a href='/contact-us'
                                                             class="buy-btn">Book
                    Appointment</a></div>
                </div>
              </div>
            </div>
          </div>
          <!--          <img src="images/slide-img1.jpg">-->

        </div>

      </splide-slide>
      <splide-slide>
        <div style="background: url('images/slide-img2.jpg'); background-size: cover; height: 100%">
        </div>
      </splide-slide>
    </splide>

    <div class="top-cate">
      <div class="featured-pro container">
        <div>
          <div class="slider-items-products">
            <div class="new_title">
              <h2>browse by car type </h2>
            </div>
            <div>
              <splide :options="{autoWidth: true, focus:'center', start:2}" class="slider-items slider-width-col4 products-grid">
                <splide-slide>
                  <a href="/cars?Sedan" target="_blank">
                    <div class="item">
                      <div class="pro-img"><img src="images/car-type1.png" alt="Retis lapen casen">
                        <div class="pro-info">Sedans</div>
                      </div>
                    </div>
                  </a>
                </splide-slide>
                <splide-slide>
                  <a href="/trucks" target="_blank">
                    <div class="item">
                      <div class="pro-img"><img src="images/car-type2.png" alt="Retis lapen casen">
                        <div class="pro-info">Trucks</div>
                      </div>
                    </div>
                  </a>
                </splide-slide>
                <splide-slide>
                  <a href="/cars?type=SUV" target="_blank">
                    <div class="item">
                      <div class="pro-img"><img src="images/car-type7.png" alt="Retis lapen casen">
                        <div class="pro-info">SUVS‎</div>
                      </div>
                    </div>
                  </a>
                </splide-slide>
                <!--                <splide-slide>-->
                <!--                  <a href="/cars" target="_blank">-->
                <!--                    <div class="item">-->
                <!--                      <div class="pro-img"><img src="images/car-type3.png" alt="Retis lapen casen">-->
                <!--                        <div class="pro-info">Convertibles</div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </a>-->
                <!--                </splide-slide>-->
                <!--                <splide-slide>-->
                <!--                  <a href="/cars" target="_blank">-->
                <!--                    <div class="item">-->
                <!--                      <div class="pro-img"><img src="images/car-type5.png" alt="Retis lapen casen">-->
                <!--                        <div class="pro-info">Hybrids</div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </a>-->
                <!--                </splide-slide>-->
                <splide-slide>
                  <a href="/trucks?type=Hatchback" target="_blank">
                    <div class="item">
                      <div class="pro-img"><img src="images/car-type9.png" alt="Retis lapen casen">
                        <div class="pro-info">Hatchbacks</div>
                      </div>
                    </div>
                  </a>
                </splide-slide>
                               <!-- <splide-slide>
                                 <a href="/cars" target="_blank">
                                   <div class="item">
                                     <div class="pro-img"><img src="images/car-type6.png" alt="Retis lapen casen">
                                       <div class="pro-info">Coupes</div>
                                     </div>
                                   </div>
                                 </a>
                               </splide-slide> -->
                <!--                <splide-slide>-->
                <!--                  <a href="/cars" target="_blank">-->
                <!--                    <div class="item">-->
                <!--                      <div class="pro-img"><img src="images/car-type8.png" alt="Retis lapen casen">-->
                <!--                        <div class="pro-info">Wagons</div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </a>-->
                <!--                </splide-slide>-->
                <!--                <splide-slide>-->
                <!--                  <a href="/cars" target="_blank">-->
                <!--                    <div class="item">-->
                <!--                      <div class="pro-img"><img src="images/car-type10.png" alt="Retis lapen casen">-->
                <!--                        <div class="pro-info">Luxury</div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </a>-->
                <!--                </splide-slide>-->
                <splide-slide>
                  <a href="/trucks" target="_blank">
                    <div class="item">
                      <div class="pro-img"><img src="images/car-type12.png" alt="Retis lapen casen">
                        <div class="pro-info">Pickup</div>
                      </div>
                    </div>
                  </a>
                </splide-slide>
              </splide>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class=" wow bounceInUp animated">
      <div class="best-pro slider-items-products container">
        <div class="new_title">
          <h2 style="float: left">Best Seller Cars</h2>
<!--          <h2 style="float: right; text-align: right" class="view-all-header"><a href="/cars">View All</a></h2>-->
        </div>
        <CarTruckListing :service="car_service" item_path="cars" style="clear: both; padding-top: 10px" />

        <div>
          <hr/>
          <div class="toll-free" style="margin-top: 0"><a href="/cars" v-t="'menu.view_all'"></a>
          </div>
        </div>

      </div>
    </section>

    <section class=" wow bounceInUp animated">
      <div class="best-pro slider-items-products container">
        <div class="new_title">
          <h2>Best Seller Machines</h2>
<!--          <h2 style="float: right; text-align: right" class="view-all-header"><a href="/machinery">View All</a></h2>-->
        </div>
        <MachineryItemListing style="padding-top: 10px"/>
        <div>
          <hr/>
          <div class="toll-free" style="margin-top: 0"><a href="/machinery" v-t="'menu.view_all'"></a>
          </div>
        </div>
      </div>
    </section>

    <ListingFooter/>
  </div>
</template>

<script>
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import ClientHeader from "@/components/Client/ClientHeader";

import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import MachineryItemListing from "@/components/Client/Machinery/MachineryItemListing";
import CarTruckListing from "@/components/Client/Listing/CarTruckItemListing";
import CarService from '@/services/car';


export default {
  name: "Home",
  components: {
    CarTruckListing,
    MachineryItemListing,
    ListingFooter,
    ClientHeader,
    Splide, SplideSlide
  },
  data() {
    return {
      options: {
        type: 'loop',
        // height: 600,
        autoWidth: false,
        heightRatio: .4,
        perPage: 1,
        gap: '1rem',
        autoPlay: true
      },
      items: [],
      car_service: CarService
    };
  },
  methods: {
    get_items: async function (query_params) {
      this.loading = true;
      console.log('getting items: ', query_params)

      let response_data = (await CarService.get_items()).data
      console.log(response_data)
      this.items = response_data.items
    }
  },
  created() {
    // this.get_items()
  }
}
</script>

<style>
.LargeTitle {
  font-size: 7rem !important;
}

.view-all-header {
  background-color: #ED6663 !important;
}

.view-all-header a {
  color: white !important;
}

.view-all-header:after {
  content: '';
  position: absolute;
  height: 100%;
  transform: skew(0deg) !important;
  left: 0;
  top: 0;
  background-color: inherit;
  z-index: 0;
}
</style>