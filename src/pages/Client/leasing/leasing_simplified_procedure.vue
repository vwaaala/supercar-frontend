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
                            <h1 class="blog_entry-title">Procedura uproszczona</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>

                          <div style="">
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

                          <br style="clear: both">

                          <div class="thm-post" style="">
                            <h4 style="color: #008080">PROCEDURA UPROSZCZONA W SUPERCAR.PL</h4>
                            <p>Coraz więcej firm decyduje się na leasing pojazdów firmowych, dodatkowo wzrasta
                              zainteresowanie leasingiem ze strony osób prywatnych. Do niedawna otrzymanie decyzji
                              leasingowej wiązało się z dopełnieniem szeregu formalności. Zniechęcało to Klientów,
                              którzy nie mieli czasu na wyciąganie zaświadczeń z urzędów .</p>
                            <p>Zwiększenie zainteresowania leasingiem jest wynikiem wprowadzenia procedury uproszczonej,
                              która oszczędza przede wszystkim czas Klienta.</p>


                            <h4 style="color: #008080">NA CZYM POLEGA PROCEDURA UPROSZCZONA?</h4>

                            <p>Procedura uproszczona, jak sama nazwa wskazuje, jest krótszą drogą do uzyskania kredytu
                              oraz leasingu przez firmy jak i osoby prywatne. W procedurze uproszczonej nie wymagamy od
                              Klienta dokumentów finansowych oraz PIT-ów. Jest korzystna w przypadku, gdy Klient nie
                              może udokumentować historii kredytowej. Decyzje kredytową oraz leasingową podejmujemy na
                              podstawie dowodu osobistego oraz dowodu osobistego współmałżonka, a w przypadku firmy -
                              wpisu do ewidencji działalności gospodarczej, oraz danych firmy - NIP-u oraz REGON-u.</p>
                            <p>Jest to korzystne rozwiązanie dla nowo powstałych firm, które potrzebują natychmiastowej
                              decyzji kredytowej, by znaleźć źródło finansowania pojazdów firmowych.</p>


                            <h4 style="color: #008080">ZALETY LEASINGU W SUPERCAR.PL</h4>
                            <ul>
                              <li>Ponieważ posiadamy sieć mobilnych sprzedawców, czas i miejsce podpisania umowy
                                dostosujemy do Ciebie. Współpracujemy z Klientami na terenie całego kraju.
                              </li>
                              <li>Finansujemy do 100% ceny pojazdu brutto, a nawet koszty jego ubezpieczenia i
                                eksploatacji.
                              </li>
                              <li>Szybka i sprawna obsługa Klienta. Decyzję leasingową podejmujemy w ciągu kilku godzin
                                (maksymalnie do dwóch dni).
                              </li>
                              <li>Wymogi dokumentów ograniczamy do minimum. W SUPERCAR.PL nie doświadczysz
                                niekompetencji
                                pracowników, ponieważ finansowaniem zakupu pojazdów zajmujemy się od 10 lat. Dzięki
                                naszemu
                                doświadczeniu uzyskujemy pozytywne decyzje leasingowe nawet dla Klientów, którzy
                                otrzymali
                                negatywną decyzję z banku.
                              </li>
                              <li>Nie musisz pokazywać swoich PIT-ów</li>
                              <li>Nie wymagamy zaświadczenia o dochodach firmy oraz z ZUS-u.Nie wymagamy zaświadczenia o
                                dochodach
                                firmy od pracodawcy
                              </li>
                              <li>Decyzję leasingową opieramy na podstawie oświadczenia ( nie zaświadczenia) o dochodach
                                oraz
                                wymaganych dokumentach.
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
  name: "leasing_simplified_procedure",
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