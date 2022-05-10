<template>
  <div>
    <h3 class="m-0">Dashboard</h3>
    <hr>
    <b-row>


      <b-col xl="3" lg="4" md="6" class="item-card">
        <div class="small-box bg-info">
          <div class="inner">
            <h3>{{ stats.cars }}</h3>
            <h4>Cars</h4>
          </div>
          <div class="icon">
            <i class="fa fa-car"></i>
          </div>
          <a href="/admin/cars" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
        </div>
      </b-col>


      <b-col xl="3" lg="4" md="6" class="item-card">
        <div class="small-box bg-success">
          <div class="inner">
            <h3>{{ stats.trucks }}</h3>
            <h4>Trucks</h4>
          </div>
          <div class="icon">
            <i class="fa fa-truck"></i>
          </div>
          <a href="/admin/trucks" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
        </div>
      </b-col>


      <!--      <b-col xl="3" lg="4" md="6" class="item-card">-->
      <!--        <div class="small-box bg-warning">-->
      <!--          <div class="inner">-->
      <!--            <h3>{{ stats.van }}</h3>-->
      <!--            <h4>Delivery Van</h4>-->
      <!--          </div>-->
      <!--          <div class="icon">-->
      <!--            <i class="fa fa-truck"></i>-->
      <!--          </div>-->
      <!--          <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>-->
      <!--        </div>-->
      <!--      </b-col>-->


      <b-col xl="3" lg="4" md="6" class="item-card">
        <div class="small-box bg-danger">
          <div class="inner">
            <h3>{{ stats.machinery }}</h3>
            <h4>Machinery</h4>
          </div>
          <div class="icon">
            <i class="fa fa-cogs"></i>
          </div>
          <a href="/admin/machinery" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
        </div>
      </b-col>


    </b-row>
  </div>
</template>

<script>
import {get_stats} from "@/services/dashboard";

export default {
  name: "DashBoard",
  data: function () {
    return {
      stats: {}
    }
  },
  async created() {
    this.stats = (await get_stats()).data
  }
}
</script>

<style scoped>
.bg-info,
.bg-success,
.bg-danger > a, h3, h4 {
  color: #fff;
}

.small-box {
  margin-bottom: 15px;
}

.small-box > .inner {
  padding: 10px;
}

.small-box h3, .small-box p {
  z-index: 5;
}

.small-box h3 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 10px;
  padding: 0;
  white-space: nowrap;
}

.small-box h3, .small-box p {
  z-index: 5;
}

.small-box p {
  font-size: 1rem;
}

.small-box .icon {
  color: rgba(0, 0, 0, .15);
  z-index: 0;
  font-size: 70px;
  top: 20px;
  position: absolute;
  right: 30px;
}

.small-box > .small-box-footer {
  background-color: rgba(0, 0, 0, .1);
  color: rgba(255, 255, 255, .8);
  display: block;
  padding: 3px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  z-index: 10;
}

</style>