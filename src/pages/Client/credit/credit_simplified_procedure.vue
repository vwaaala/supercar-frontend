<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('price_breakdown.credit')" background="/images/category-bg.jpg"/>
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
                            <h1 class="blog_entry-title">Procedura uproszczona</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>
                          <div style="padding-bottom: 30px">
                            <div class="col-md-8" style="background-color: #5FC436; color: white; min-height: 50px">
                              <div>W razie dodatkowych pytań odnośnie kreydtu zapraszamy do kontaktu z naszym doradcą
                                kredytowym - <b>512 037 327</b> lub <b>71 342 44 44</b>
                              </div>
                            </div>
                            <div class="col-md-4 text-right"
                                 style="background-color: #FFFF00; color: black; height: 50px">
                              <b>Złóż wniosek kredytowy już TERAZ >></b>
                            </div>
                          </div>


                          <div class="thm-post" style="clear: both; margin-top: 50px">
                            <p>Wiele osób wiąże proces wzięcia kredytu z nieprzyjemnym doświadczeniem. Rzadko kto może
                              sobie pozwolić na stanie w kolejkach w urzędach, by załatwić zaświadczenia dla
                              kredytodawcy. Oznacza to przynajmniej jednodniową nieobecność w firmie, zmarnowany czas i
                              nerwy. Procedura uproszczona jest odpowiedzią na potrzeby Klientów, którzy nie chcą tracić
                              czasu na formalności.</p>

                            <p>Potrzebujesz szybkiej decyzji kredytowej? Chcesz jak najszybciej otrzymać kredytowany
                              pojazd? Chciałbyś uniknąć niepotrzebnych formalności?</p>

                            <p><b>SUPERCAR.PL specjalizuje się w kredytowaniu pojazdów w szybki i sprawny
                              sposób.</b></p>

                            <p><b>Wyróżnia nas skuteczność w sprawach trudnych oraz doświadczenie, które zdobywamy od
                              2001
                              roku.</b></p>

                            <p><b>Sprawami naszych Klientów zajmują sie wykwalifikowani Doradcy.</b></p>

                            <h4>NA CZYM POLEGA PROCEDURA UPROSZCZONA?</h4>

                            <p>Procedura uproszczona, jak sama nazwa wskazuje, jest krótszą drogą do uzyskania kredytu
                              oraz leasingu przez firmy jak i osoby prywatne. W procedurze uproszczonej nie wymagamy od
                              Klienta dokumentów finansowych oraz PIT-ów. Jest korzystna w przypadku, gdy Klient nie
                              może udokumentować historii kredytowej. Decyzję kredytową podejmujemy zazwyczaj na
                              podstawie dowodu osobistego i zaświadczenia o dochodach lub wyciągu z ROR. Decyzję
                              leasingową podejmujemy na podstawie dowodu osobistego oraz numeru NIP firmy.</p>

                            <p>Procedura uproszczona to korzystne rozwiązanie dla nowo powstałych firm, które potrzebują
                              natychmiastowej decyzji kredytowej, by znaleźć źródło finansowania pojazdów firmowych.</p>


                            <h4>CO ZYSKUJĘ KORZYSTAJĄC Z PROCEDURY UPROSZCZONEJ?</h4>

                            <p>Procedura uproszczona to szybkie podjęcie decyzji kredytowej oraz leasingowej - od kilku
                              godzin do dwóch dni. Zaoszczędzisz dzięki temu cenny czas.</p>

                            <p>Oferujemy szybki dostęp do finasowanego pojazdu oraz minimum formalności.</p>

                            <p>Kredytujemy do 120% wartości pojazdu - w ten sposób zyskujesz dodatkową gotówkę na
                              dowolny cel.</p>


                            <h4>JAK MOGĘ OTRZYMAĆ SZYBKĄ DECYZJĘ KREDYTOWĄ LUB LEASINGOWĄ?</h4>

                            <p>Aby szybko otrzymać kredyt lub leasing na wymarzony pojazd, należy dostarczyć nam
                              wymagane dokumenty.</p>
                            <p>Dokumenty potrzebne do uzyskania decyzji leasingowej.</p>
                            <p>Dokumenty potrzebne do uzyskania decyzji kredytowej.</p>

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
  name: "credit_simplified_procedure",
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