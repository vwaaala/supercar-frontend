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
                            <h1 class="blog_entry-title">Dla kogo kredyt?</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>

                          <div style="padding-bottom: 30px">
                            <div class="col-md-8" style="background-color: #5FC436; color: white; height: 50px">
                              <div>W razie dodatkowych pytań odnośnie kreydtu zapraszamy do kontaktu z naszym doradcą
                                kredytowym - <b>512 037 327</b> lub <b>71 342 44 44</b>
                              </div>
                            </div>
                            <div class="col-md-4 text-right"
                                 style="background-color: #FFFF00; color: black; height: 50px">
                              <b>Złóż wniosek kredytowy już TERAZ >></b>
                            </div>
                          </div>


                          <div class="thm-post" style="clear: both">

                            <p><b>Specjalizujemy się w sprawach trudnych, kiedy Klient dostaje z banku negatywną decyzję
                              kredytową.</b></p>

                            <p>Zaufaj naszemu wieloletniemu doświadczeniu w finansowaniu zakupu pojazdów i skorzystaj z
                              pomocy wykwalifikowanych doradców! Jesteśmy specjalistami w naszej dziedzinie. <b>Wyróźnia
                                nas skuteczność.</b></p>

                            <p>Nawiązujemy współpracę z nowootwartymi firmami. Doceniamy przedsiębiorczych i ambitnych
                              biznesmenów, którzy dopiero zaczynają. Nie musisz mieć gotówki na wkład własny. Wystarczy,
                              że posiadasz poręczyciela lub wykażesz powiązanie pomiędzy poprzednim zatrudnieniem a
                              aktualną działalnością gospodarczą. W przeciwnym wypadku wymagany jest wkład własny 25%
                              wartości pojazdu.</p>

                            <p>Jesteś niepełnosprawny? Posiadamy wykwalifikowaną obsługę osób niepełnosprawnych, m.in.
                              osób głuchoniemych.</p>

                            <h2>Dla kogo kredyt?</h2>
                            <p>Oferta SUPERCAR.PL skierowana jest do:</p>

                            <ul>
                              <li>osób fizycznych prowadzących działalność gospodarczą,</li>
                              <li>osób fizycznych zatrudnionych na umowę o pracę,</li>
                              <li>osób wykonujących tzw. wolny zawód,</li>
                              <li>spółek osobowych - cywilnych i jawnych,</li>
                              <li>osób prawnych, w tym spółek z o.o., komandytowych i akcyjnych,</li>
                              <li>emerytów i rencistów,</li>
                              <li>rolników,</li>
                              <li>osób niepełnosprawnych.</li>
                            </ul>

                            <h2> Co kredytujemy?</h2>
                            <p>Kredyt możesz uzyskać na zakup sprzętu poleasingowego lub powindykacyjnego <b>z naszej
                              oferty</b>:</p>

                            <p><a href="www.supercar.pl/Wyszukiwarka"
                                  style="color: green">www.supercar.pl/Wyszukiwarka</a></p>

                            <p>a także na zakup:</p>
                            <ul>
                              <li>nowych i używanych samochodów osobowych lub dostawczych,</li>
                              <li>pojazdów sprzedawanych przez autoryzowanych dealerów, komisy samochodowe, osoby
                                fizyczne,
                              </li>
                              <li>samochodów sprowadzonych z zagranicy i niezarejestrowanych jeszcze w Polsce,</li>
                              <li>maszyn rolniczych, budowlanych i innych.</li>
                            </ul>

                            <p>Możesz również odzyskać pieniądze zainwestowane w zakup swojego samochodu - sprawdź naszą
                              ofertę refinansowania!</p>


                            <h2>Dlaczego warto zdecydować się na SUPERCAR.PL?</h2>
                            <ul>
                              <li>jesteśmy największym polskim brokerem, <b>od 2001 roku</b> zajmujemy się sprzedażą i
                                finansowaniem zakupu pojazdów,
                              </li>
                              <li>udzielamy kredytów do 120% wartości pojazdów, dzięki czemu <b>zyskujesz gotówkę na
                                dowolny
                                cel,</b>
                              </li>
                              <li>decyzję kredytową otrzymasz nawet w <b>1 dzień</b>,</li>
                              <li>formalności ograniczamy do niezbędnego minimum,</li>
                              <li><b>czas i miejsce podpisania umowy dostosujemy do Ciebie</b> - w firmie, w domu, na terenie
                                całego
                                kraju,
                              </li>
                              <li>miesięczne <b>raty mogą być bardzo niskie</b> - okres spłaty kredytu nawet do 10 lat</li>
                              <li>kredyt mogą otrzymać także nowootwarte firmy (istniejące krócej niż 3 miesiące)</li>
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
  name: "who_is_this_loan_for",
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