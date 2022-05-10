<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('misc.sale')" background="/images/category-bg.jpg"/>
    <div class="main-container col2-right-layout">
      <div class="main container">
        <div class="row">
          <div class="col-12" style="visibility: visible;">


            <div class="col-main col-sm-12 col-md-12 main-blog" style="visibility: visible;">
              <!--<div class="page-title"><h2></h2></div>-->
              <div id="main" class="blog-wrapper">

                <div id="primary" class="site-content">
                  <div id="content" role="main">
                    <article id="post-29" class="blog_entry clearfix">

                      <div class="entry-content">
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h1 class="blog_entry-title">Samochody po leasingu</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>


                          <div class="thm-post">
                            <h3>Professional car service in the very center of Wrocław.</h3>
                            <ul>
                              <li>Does your car need servicing for a long winter?</li>
                              <li>Haven't changed your tires yet? Do you want to skip long lines while waiting for them
                                to be
                                replaced?
                              </li>
                              <li>You have nowhere to store your summer tires?</li>
                              <li>Do you have problems with the electrics in the car?</li>
                              <li>Did you break the muffler when driving over curbs?</li>
                              <li>Would you like to refresh the upholstery in your car?</li>
                              <li>Are you thinking about protecting your paint from winter?</li>
                              <li>Has your battery died?</li>
                            </ul>


                            <h4>We invite you to the supercar.pl auto service.</h4>
                            <p>You will reach us by avoiding traffic jams.</p>
                            <p>We are at 55C Strzegomska Street.</p>

                            <p>Call us and make an appointment for a specific time.</p>
                            <p>The mechanic is waiting for your call.</p>
                            <p><b>Call: 71 342 44 44</b></p>
                            <p>Competitive prices and professional service.</p>


                            <h5>We have a special pre-winter promotion for you.</h5>
                            <p>Check out our great prices.</p>
                            <p>Book your visit now!</p>

                            <img src="/images/banner_001.jpg" alt="" width="70%">
                          </div>

                        </div>
                      </div>
                    </article>

                  </div>
                </div>

              </div>
              <!--#main wrapper grid_8-->


            </div>

          </div>
          <!--col-right sidebar-->
        </div>
        <!--row-->
      </div>
      <!--main-container-inner-->
    </div>

    <ListingFooter/>
  </div>
</template>

<script>
import ClientHeader from "@/components/Client/ClientHeader";
import ListingFooter from "@/components/Client/Listing/ListingFooter";
import ListingHeader from "@/components/Client/Listing/ListingHeader";

export default {
  name: "proven_service",
  components: {ListingHeader, ListingFooter, ClientHeader}
}
</script>

<style scoped>
.featured-thumb img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>