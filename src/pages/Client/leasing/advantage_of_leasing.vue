<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('price_breakdown.leasing')" background="/images/category-bg.jpg"/>
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
                        <div class="featured-thumb"><a href="#"><img src="/images/blog-img3.jpg" alt="blog-img4"></a>
                        </div>
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h1 class="blog_entry-title">Zalety leasingu</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>


                          <div style="padding-bottom: 30px">
                            <div class="col-md-8" style="background-color: #2ACAE2; color: white; height: 50px">
                              <div>W razie dodatkowych pytań odnośnie kreydtu zapraszamy do kontaktu z naszym doradcą
                                kredytowym - <b>512 037 327</b> lub <b>71 342 44 44</b>
                              </div>
                            </div>
                            <div class="col-md-4 text-right"
                                 style="background-color: #CAFB61; color: black; height: 50px">
                              <b> Złóż wniosek leasingowy już TERAZ >></b>
                            </div>
                          </div>

                          <div style="clear: both"></div>

                          <div class="thm-post" style=" margin-top: 20px">

                            <h4>Główne zalety leasingu:</h4>
                            <ul>
                              <li>Sprzęt, który bierzesz w leasingu, finansowany jest ze źródeł zewnętrznych.
                                Zaoszczędzone pieniądze możesz zainwestować w inną działalność lub rozwijać firmę.
                              </li>
                              <li>Program leasingowy zostanie dopasowany do Twoich oczekiwań i możliwości. Nie musisz
                                się
                                martwić, że nie będziesz w stanie spłacać rat.
                              </li>
                              <li>Decyzja o przyznaniu leasingu jest bardzo szybka. Od kilku godzin do dwóch dni.</li>
                              <li>Ty wybierasz miejsce podpisania umowy (twój dom, firma etc.).</li>
                              <li>Masz również możliwość realizacji cesji umowy w trakcie jej trwania na inną firmę,
                              </li>
                              <li>Możesz także zrealizować kilka umów leasingowych w jednym momencie.</li>
                            </ul>

                            <h4>Korzyści podatkowe</h4>
                            <ul>
                              <li>- Kupując sprzęt w leasingu, masz możliwość wliczenia zarówno wpłaty początkowej jak i
                                czynszów leasingowych w koszty uzyskania przychodu.
                              </li>
                              <li>- Nie płacisz całego podatku VAT od razu, bo naliczany jest osobno do poszczególnych
                                rat
                                leasingowych.
                              </li>
                            </ul>

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
  name: "advantage_of_leasing",
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