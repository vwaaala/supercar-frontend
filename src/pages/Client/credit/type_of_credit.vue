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
                            <h1 class="blog_entry-title">Rodzaje kredytu</h1>
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


                          <div class="thm-post" style="clear: both; padding-top: 50px;">
                            <h2 class="text-center">Dlaczego warto zdecydować się na kredyt w SUPERCAR.PL?</h2>
                            <p class="text-center"><b>Jesteśmy największym polskim brokerem. Doświadczenie zdobywamy od
                              2001 roku!</b></p>
                            <p class="text-center"><b>Zapewniamy naszym Klientom wsparcie wykwalifikowanych
                              doradców.</b></p>
                            <h4 class="text-center">W ofercie SUPERCAR.PL znajdziesz 3 rodzaje kredytów:</h4>

                            <h4>1. Kredyt na zakup pojazdu.</h4>
                            <p>Podjęcie decyzji kredytowej w ciągu kilku godzin (maksymalnie do dwóch dni).</p>
                            <p>Kredytujemy zakup samochodów, maszyn budowlanych oraz rolniczych.</p>
                            <p>Nie wymagamy wkładu własnego.</p>
                            <p>Kredytujemy do 120% wartości pojazdu.</p>
                            <p>Posiadamy sieć sprzedażową na terenie całego kraju, umowę kredytową możemy podpisać w
                              Twoim
                              miejscu pracy lub zamieszkania.</p>
                            <p>Miesięczne raty mogą być bardzo niskie - okres spłaty kredytu nawet do 10 lat.</p>
                            <p>Udzielamy kredytu także nowootwartym firmom (istniejącym krócej niż 3 miesiące).</p>
                            <p>Obsługujemy niepełnosprawnych m.in. osoby głuchonieme.</p>


                            <h4>2. Kredyt/pożyczka pod zastaw pojazdu.</h4>

                            <p>Masz samochód? Potrzebujesz gotówki, ale nadal chcesz być właścicielem pojazdu i
                              korzystać z niego? Rozwiązaniem może być kredyt/pożyczka pod zastaw pojazdu.</p>


                            <h4>Na czym polega pożyczka pod zastaw pojazdu?</h4>

                            <p>W SUPERCAR.PL wyceniamy Twój pojazd na sumę, która może sięgać nawet 100% wartości
                              pojazdu. Następnie otrzymujesz gotówkę, którą możesz przeznaczyć na dowolny cel. Dzięki
                              temu zyskujesz płynność finansową, możesz spłacić zobowiązania lub zainwestować.
                              Pożyczek udzielamy pod zastaw pojazdów osobowych i dostawczych wszystkich marek, zarówno
                              nowych jak i używanych.</p>

                            <p>Miesięczne raty spłaty kredytu mogą być bardzo niskie, a okres spłaty może wynosić nawet
                              do 10 lat.</p>

                            <h4>3. Kredyt pod zastaw pojazdu sprowadzonego z zagranicy.</h4>

                            <p>Sprowadziłeś pojazd z zagranicy gotowy do zarejestrowania w Polsce? Chciałbyś odzyskać
                              zainwestowaną gotówkę, ale nadal używać pojazdu? W SUPERCAR.PL udzielamy pożyczki również
                              na pojazdy sprowadzane.</p>

                            <h4>ZALETY POŻYCZKI POD ZASTAW POJAZDU W SUPERCAR.PL:</h4>

                            <ul>
                              <li>refinansowanie lub kredyt/pożyczka w kwocie do 100% wartości rynkowej pojazdu plus
                                dodatkowa gotówka na dowolny cel,
                              </li>
                              <li>dla przedsiębiorców - możliwość releasingu środków trwałych,</li>
                              <li>samochód przez cały czas pozostaje do Twojej pełnej dyspozycji,</li>
                              <li>uproszczone procedury, decyzja online, podpisanie umowy w dowolnym miejscu na terenie
                                kraju,
                              </li>
                              <li>do kwoty 20 000 zł zgoda współmałżonka nie jest wymagana,</li>
                              <li>przy odpowiednim udokumentowaniu akceptujemy zarobki z zagranicy.</li>
                            </ul>

                            * pojazdy zarejestrowane tylko na terenie RP

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
  name: "type_of_credit",
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