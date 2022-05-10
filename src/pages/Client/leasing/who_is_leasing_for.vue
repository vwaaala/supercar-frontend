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
                            <h1 class="blog_entry-title">Who is leasing for?</h1>
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

                            <h4>Dla kogo jest leasing?</h4>

                            <p>Leasing jest ciekawym sposobem na finansowanie środków trwałych. Minimum formalności,
                              liczne korzyści, krótki czas finalizacji od momentu decyzji, czynią leasing popularny
                              przede wszystkim wśród małych i średnich przedsiębiorstw, ale służy zarówno osobom
                              prowadzącym działalność gospodarczą, jak i dużym przedsiębiorstwom.</p>
                            <p>Leasing w odróżnieniu od kredytu, nie stawia przed przedsiębiorcą konieczności wykazania
                              dużej zdolności kredytowej. Jest to interesujące narzędzie dla firm, które swoją
                              działalność finansują z bieżących przychodów.</p>

                            <h4>Kiedy korzystać z leasingu?</h4>

                            <p>Z leasingu warto skorzystać, kiedy firma ma wysokie przychody podatkowe lub jeśli firma
                              nie ma zdolności kredytowej, ewentualnie posiada już jeden kredyt i nie ma szans na
                              otrzymanie kolejnego.</p>
                            <p>Niewątpliwą zaletą leasingu jest rozszerzona oferta usług dodatkowych. Leasingodawca może
                              zaoferować włączenie do raty leasingowej kosztów ubezpieczenia, konseerwację i serwis
                              leasingowanego przedmiotu. Nie musisz martwić się wtedy martwić zabezpieczeniem samochodu
                              służbowego. Całość formalności obsługuje firma leasingowa.</p>

                            <p>Przygotujemy dla Ciebie umowę leasingową, która pozwoli, bez naruszania własnych środków
                              obrotowych sfinansować nawet bardzo duże inwestycyje. Musisz się liczyć z koniecznością
                              wkładu własnego, ale możemy postarać się, aby to moliwie najniższa kwota. Standardowo jest
                              to 10%, ale w niektórych przypadkach oferujemy również leasing bez pierwszej wpłaty.</p>

                            <h4>Korzyści fiskalne</h4>

                            <p>Nawet jeżeli posiadasz własne środki na inwestycje leasing może być dla Ciebie korzystny
                              ze względów fiskalnych. Dzięki leasingowi możesz zmniejszać koszty uzyskania przychodów,
                              przez co uzyskujesz znaczące oszczędności podatkowe. Oszczędzasz wtedy środki, które
                              możesz zainwestować w inne projekty poszerzające konkurencyjność Twojej firmy.</p>

                            <h4>Czy wiesz, że?</h4>

                            <p>Dzięki leasingowi sfinansujesz nie tylko wielkie linie produkcyjne, samochody ciężarowe i
                              maszyny budowlane. Możesz również wyposażyć biuro, nie dysponując środkami na zakupy.
                              Dotyczy to zarówno zakupu mebli biurowych, wyposażenia w sprzęt komputerowy, czy też
                              kserokopiarek. Wybranie leasingu jako formy finansowania zakupów do biura szybko zwaraca
                              się w postaci korzystnych efektów fiskalnych.</p>

                            <h4>Podsumowując, z leasingu mogą korzystać:</h4>
                            <ul>
                              <li>Osoby fizyczne prowadzące działalność gospodarczą</li>
                              <li>Osoby prowadzące nowootwarte firmy</li>
                              <li>Osoby prowadzące działalność gospodarczą i księgi handlowe</li>
                              <li>Osoby pracujące w wolnych zawodach</li>
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
  name: "who_is_leasing_for",
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