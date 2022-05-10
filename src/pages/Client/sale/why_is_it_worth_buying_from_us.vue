<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader :title="$t('misc.sale')" background="/images/category-bg.jpg"/>
    <div class="main-container col2-right-layout">
      <div class="main container">
        <div class="row">
          <div class="col-12">


            <div class="col-main col-sm-12 col-md-12 main-blog">
              <!--<div class="page-title"><h2></h2></div>-->
              <div id="main" class="blog-wrapper">

                <div id="primary" class="site-content">
                  <div id="content" role="main">


                    <article class="blog_entry clearfix wow bounceInUp animated animated animated">

                      <div class="entry-content">
                        <div class="text-center"><img src="/images/kredyt.jpg" alt="blog-img3"></div>

                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h1 style="color: green" class="blog_entry-title">Kredyt - pomożemy Ci w uzyskaniu
                              najlepszej raty</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <p style="font-size: x-small; color: green">
                          <i>TAGI: kredyt na samochód, kredyt na sprzęt, kredyt maszyny, kredyt, finansowanie</i>
                        </p>

                        <div class="entry-content">
                          <div class="thm-post">

                            <p>Mamy przyjemność przedstawić Państwu najszerszą i najlepszą ofertę kredytową w
                              Polsce.</p>
                            <p>Przedmiotem kredytu mogą być SAMOCHODY, MASZYNY i URZĄDZENIA - zarówno nowe, jak i
                              używane.</p>
                            <p>Oferowany przez nas KREDYT NA SAMOCHÓD należy do najlepszych i najtańszych produktów
                              kredytowych w Polsce!</p>
                            <p>Poprzez sieć naszych mobilnych doradców obsługujemy klientów z całej Polski</p>

                            <table cellspacing="4" border="0" align="center" width="1000" cellpadding="2">
                              <tbody>
                              <tr>
                                <td style="background-color: #47942A; font-size: large; text-align: center; color: white"
                                    width="700" height="100">
                                  Możesz poznać decyzję kredytową nawet w ciągu 1 godziny!
                                  Prosimy o wypełnienie wniosku kredytowego.
                                </td>
                                <td width="300"
                                    style="background-color: yellow; font-size: x-large; text-align: center">
                                  WNIOSEK KREDYTOWY
                                  <span style="font-size: medium; color: green">Kliknij, aby wypełnić</span>
                                </td>
                              </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                      </div>
                    </article>


                    <article class="blog_entry clearfix wow bounceInUp animated animated animated">

                      <div class="entry-content">
                        <div class="text-center"><img src="/images/panii.jpg" alt="blog-img3"></div>
                        <br>
                        <header class="blog_entry-header clearfix">
                          <div class="blog_entry-header-inner">
                            <h3 class="blog_entry-title"><span> Dlaczego warto wybrać kredyt Supercar.pl?</span></h3>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <div class="entry-content">
                          <div class="thm-post">
                            <ul>
                              <li>Decyzja w 1 dzień</li>
                              <li>Uproszczone procedury</li>
                              <li>Bez wychodzenia z domu (decyzja przez telefon, interenet)</li>
                              <li>Kredytujemy do 120% wartości pojazdu</li>
                              <li>Duże rabaty cenowe na nowe auta</li>
                              <li>Pożyczka pod zastaw użytkowanego auta</li>
                              <li>Atrakcyjna oferta ubezpieczeń</li>
                              <li>Także dla nowootwartych firm</li>
                              <li>Finansujemy osoby firugujące w bazach BIK</li>
                              <li>Oferujemy rabaty cenowe na finansowanie sprzętu z naszej oferty - zapraszamy do
                                <b>Systemu Prezentacji
                                  Ofert™</b>
                              </li>
                              <li>Gwarancja bezpieczeństwa i jakości - jesteśmy na rynku od 12 lat.</li>
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
  name: "why_is_it_worth_buying_from_us",
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

.row {
  display: table;
}

.row [class*="col-"] {
  float: none;
  display: table-cell;
  vertical-align: top;
}
</style>