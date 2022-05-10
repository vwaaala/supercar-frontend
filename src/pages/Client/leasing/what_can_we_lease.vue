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
                            <h1 class="blog_entry-title">Co możemy leasingować?</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

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
                          <p>Oferujemy do sprzedaży klikaset przedmiotów pochodzących z zakończonych lub rozwiązanych
                            umów leasingowych lub po windykacji. Sprzęt do nas trafiający posiada wycenę nieazleżnych
                            rzeczoznawców (PZMOT, DEKRA). Dokładamy wszelkich starań, abyś mógł jak najdokładniej
                            zapoznać się ze stanem przedmiotu. Pomagamy w uruchomieniu oferowanych urządzeń, zezwalamy
                            na sprawdzenie sprzętu przez wykwalifikowanych specjalistów.</p>
                        </div>
                      </div>
                    </article>

                    <article class="blog_entry clearfix wow bounceInUp animated animated animated"
                             style="visibility: visible;">

                      <div class="entry-content">
                        <div class="text-center"><img src="/images/1mm.jpg" alt="blog-img3"></div>
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h2 class="blog_entry-title"><span style="color: red">Środki transportu</span></h2>

                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <div class="entry-content">
                          <div class="thm-post" style=" margin-top: 20px">

                            <ul>
                              <li>Samochody osobowe</li>
                              <li>Samochody dostawcze</li>
                              <li>Samochody ciężarowe</li>
                              <li>Naczepy i przyczepy</li>
                              <li>Pojazdy specjalistyczne</li>
                              <li>Autobusy</li>
                              <li>Ciągniki rolnicze</li>
                              <li>Motocykle i quady</li>
                              <li>Wózki widłowe</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article class="blog_entry clearfix wow bounceInUp animated animated animated">
                      <div class="entry-content">
                        <div class="text-center"><img src="/images/2mm.jpg" alt="blog-img3"></div>
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h2 class="blog_entry-title"><span style="color: red">Maszyny</span></h2>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <div class="entry-content">
                          <div class="thm-post" style=" margin-top: 20px">
                            <ul>
                              <li>Maszyny Budowlane</li>
                              <li>Kompletne Linie Produkcyjne</li>
                              <li>Maszyny Stolarskie i do Drewna</li>
                              <li>Maszyny Kamieniarskie</li>
                              <li>Maszyny do Metalu</li>
                              <li>Maszyny Krawieckie i Dziewiarskie</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article id="post-29" class="blog_entry clearfix wow bounceInUp animated animated animated"
                             style="visibility: visible;">

                      <div class="entry-content">
                        <div class="text-center"><img src="/images/3mm.jpg" alt="blog-img3"></div>
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h2 class="blog_entry-title"><span
                                style="color: red">Środki trInne urządzeniaansportu</span></h2>

                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <div class="entry-content">
                          <div class="thm-post" style=" margin-top: 20px">
                            <ul>
                              <li>Elektroniczne</li>
                              <li>Gastronomiczne</li>
                              <li>Kosmetyczne</li>
                              <li>Medyczne</li>
                              <li>Poligraficzne</li>
                              <li>Warsztatowe</li>
                            </ul>

                            <p>Jeżeli w powyższym zestawieniu nie ma sprzętu, którego szukasz zapraszamy do kontaktu z
                              nami - wyszukamy dla Ciebie odpowiedni przedmiot.</p>
                            <p>Wszelkie informacje uzyskasz pod numerem naszej infolinii: 71 342 44 44. Zapraszamy do
                              kontaktu.</p>
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
  name: "what_can_we_lease",
  components: {ListingHeader, ListingFooter, ClientHeader}
}
</script>

<style scoped>
.featured-thumb img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.li-number {
  color: red;
  font-size: medium;
  font-weight: bold;
}
</style>