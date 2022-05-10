<template>

  <div class="footer-inner">
    <div class="our-features-box wow bounceInUp animated animated">
      <div class="container">
        <ul>
          <li>
            <div class="feature-box">
              <div class="icon-truck"><img alt="Image" src="/images/world-icon.png"></div>
              <div class="content">
                <h6>World's #1</h6>
                <p>Largest Auto portal</p>
              </div>
            </div>
          </li>
          <li>
            <div class="feature-box">
              <div class="icon-support"><img alt="Image" src="/images/car-sold-icon.png"></div>
              <div class="content">
                <h6>Car Sold</h6>
                <p>Every 4 minute</p>
              </div>
            </div>
          </li>
          <li>
            <div class="feature-box">
              <div class="icon-money"><img alt="Image" src="/images/tag-icon.png"></div>
              <div class="content">
                <h6>Offers</h6>
                <p>Stay updated pay less</p>
              </div>
            </div>
          </li>
          <li class="last">
            <div class="feature-box">
              <div class="icon-return"><img alt="Image" src="/images/compare-icon.png"></div>
              <div class="content">
                <h6>Compare</h6>
                <p>Decode the right car</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="newsletter-row" style="background-size: cover">
      <h4 style="text-align: center; font-size: 32px; padding-top: 32px">Contact Us</h4>
      <contact-us-form/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-xs-12 col-lg-4">
          <div class="co-info">
            <h4>SHOWROOM</h4>
          </div>
        </div>
        <div class="col-sm-8 col-xs-12 col-lg-8">
          <div class="footer-column">
            <h4>Quick Links</h4>
            <ul class="links">
              <li><a href="/credit/for_who" v-t="'misc.loan'"></a></li>
              <li><a href="/leasing/who_is_leasing_for" v-t="'misc.lease'"></a></li>
              <li><a href="/auction" v-t="'misc.auction'"></a></li>
              <li><a href="/" v-t="'misc.handling'"></a></li>
              <li><a href="/dashboard" v-t="'misc.my_account'"></a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Inventory</h4>
            <ul class="links">
              <li><a href="/cars" v-t="'menu.passenger_car'">Personal Cars</a></li>
              <li><a href="/trucks" v-t="'menu.truck'">Trucks</a></li>
              <li><a href="/machinery" v-t="'menu.machinery'">Machines</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Information</h4>
            <ul class="links">
              <li><a href="#" v-t="'misc.sitemap'">Sitemap</a></li>
              <li><a href="/about-us" v-t="'misc.about_us'">About Us</a></li>
              <li><a href="/contact-us" v-t="'misc.contact_us'">Contact Us</a></li>
              <li><a href="/" v-t="'menu.home'">Home</a></li>
            </ul>
          </div>
        </div>

        <!--col-sm-12 col-xs-12 col-lg-8-->
        <!--col-xs-12 col-lg-4-->
      </div>
      <!--row-->

    </div>

    <!--container-->
  </div>
</template>

<script>
import ContactUsForm from "@/pages/Client/ContactUsForm";

export default {
  name: "InformativeFooter",
  components: {ContactUsForm}
}
</script>

<style scoped>

</style>