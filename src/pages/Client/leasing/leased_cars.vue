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
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h1 class="blog_entry-title">Samochody po leasingu</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>


                          <div style="padding-bottom: 30px">
                            <div class="col-md-8" style="background-color: #3E6274; color: white; min-height: 50px">
                              <div>W razie dodatkowych pytań odnośnie kreydtu zapraszamy do kontaktu z naszym doradcą
                                kredytowym - <b>512 037 327</b> lub <b>71 342 44 44</b>
                              </div>
                            </div>
                            <div class="col-md-4 text-right"
                                 style="background-color: #ED6663; color: black; min-height: 50px">
                              <b> Złóż wniosek leasingowy już TERAZ >></b>
                            </div>
                          </div>

                          <div style="clear: both; margin-bottom: 30px"></div>


                          <div class="row">
                            <div class="col-md-4">
                              <img src="/images/car_001.jpg" alt="" style="height: 200px">
                              <h5 class="text-center"><a href="/cars" style="color: red">Samochody osobowe po leasingu</a></h5>
                            </div>
                            <div class="col-md-4">
                              <img src="/images/ducato.jpg" alt="" style="height: 200px">
                              <h5 class="text-center"><a href="/trucks" style="color: red">Samochody dostawcze po leasingu</a></h5>
                            </div>
                            <div class="col-md-4">
                              <img src="/images/ciezar2.jpg" alt="" style="height: 200px">
                              <h5 class="text-center"><a href="/trucks" style="color: red">Samochody ciężarowe po leasingu</a></h5>
                            </div>
                          <div class="thm-post" style=" margin-top: 20px; padding: 30px">
                            <br>
                            <br>
                              <p>Specjalizujemy się w sprzedaży samochodów po leasingu. Auta, które do nas trafiają
                                pochodzą zarówno z zakończonych umów leasingowych jak i po windykacji. Oferujemy pełną
                                gamę produktów finansowych, które pozwolą Ci na zakup samochodu w dogodnej formie. Nasi
                                doradcy podpowiedzą czy korzystniej dla Ciebie jest skorzystac z leasingu czy z kredytu
                                samochodowego. Również na samochody po leasingu, które znajdziesz w Systemie Prezentacji
                                Ofert Supercar.pl udzielamy leasingu na bardzo korzystnych warunkach. W razie
                                dodatkowych pytań zapraszamy do kontaktu 71 342 44 44.</p>
                            </div>

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
  name: "leased_cars",
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