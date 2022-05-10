<template>
  <div id="page">
    <ClientHeader/>
    <ListingHeader title="About Us" background="/images/category-bg.jpg"/>
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
                            <h1 class="blog_entry-title">SAMOCHODY UŻYWANE WROCŁAW</h1>
                          </div>
                          <!--blog_entry-header-inner-->
                        </header>
                        <!--blog_entry-header clearfix-->

                        <div class="entry-content">
                          <hr>
                          <div class="thm-post">
                            <div class="tresc"><p style="text-align:justify"><span style="font-size:15px"><a
                                href="http://www.supercar.pl/Dokument,samochody_uzywane_wroclaw" target="_blank"><span
                                style="color:#000"><span style="background-color:#fff">SUPERCAR.PL</span></span></a> zapewnia największy w Polsce wybór samochodów używanych z gwarancją. Codziennie oferujemy do sprzedaży ponad 800 aut dostępnych od ręki i na aukcjach. Na polskim rynku sprzedaży samochodów używanych jesteśmy już od 2001 roku. Od 15 lat dostarczamy samochody dla naszych Klientów. Zapewniamy najlepsze rozwiązania zakupu samochodów w leasingu i w kredycie. Oferta jest zawsze dopasowana idealnie do potrzeb Klienta. Wszystkie szczegóły są omawiane z księgowością naszych Klientów, dzięki temu oferta jest zawsze optymalna finansowo. Sprzedawane przez nas samochody używane pochodzą z polskich salonów dlatego posiadają pełną historię serwisową, opinie rzeczoznawcy, książki serwisowe oraz gwarancję. Zapewniamy Klientom obsługę posprzedażową na najwyższym poziomie. Dbamy o aktualność dokumentów pojazdu, ubezpieczenia oraz o stan techniczny. Prowadzimy własny Auto Serwis, gdzie nasi Klienci są obsługiwani bez kolejki. Przez ponad 15 lat sprzedaliśmy kilka tysięcy samochodów używanych: osobowych, dostawczych i ciężarowych.</span><span
                                style="font-size:15px"><br></span></p>
                              <p>&nbsp;</p>
                              <p><span style="font-size:15px">Wszystkie nasze samochody można zobaczyć tutaj:</span></p>
                              <p><span style="font-size:15px"></span></p>
                              <p>
                                <a href="http://www.supercar.pl/Wyszukiwarka" target="_blank"><span style="color:red">WYSZUKIWARKA OGŁOSZEŃ PONAD 800 SAMOCHODÓW kliknij</span></a>
                              </p>
                              <p><span style="font-size:15px">Samochody używane z gwarancją. Na tej stronie piszemy o naszej gwarancji:</span>
                              </p>
                              <p><span style="font-size:15px"></span></p>
                              <p>
                                <a href="http://www.sgs.co.pl" target="_blank"><span style="color:red">SPRAWDŹ KTÓRĄ GWARANCJE WYBRAĆ kliknij</span></a>
                              </p>
                              <p><span
                                  style="font-size:15px">Opinie Klientów, którzy zakupili nasze samochody używane:</span>
                              </p>
                              <p><span style="font-size:15px"></span></p>
                              <p><a target="_blank"
                                    href="https://www.youtube.com/channel/UCCTtAHHZ58hr5kI0EG7E1OQ"><span
                                  style="color:red">VIDEO&nbsp;OPINIE O SUPERCAR.PL kliknij</span></a></p>
                              <p><span style="font-size:15px">&nbsp;</span></p>
                              <p><span style="font-size:15px">Zapraszamy do naszego Oddziału we Wrocławiu:</span></p>
                              <p><span
                                  style="font-size:15px"><strong>DEALER SAMOCHODÓW UŻYWANYCH Z GWARANCJĄ</strong><br></span>
                              </p>
                              <p><span style="font-size:15px"></span></p>
                              <p><span style="font-size:15px"><strong>
                                <a href="http://www.SUPERCAR.PL"
                                   target="_blank"><span style="color:#000">SUPERCAR.PL</span></a> Wrocław, ul. Strzegomska 55c<br></strong></span>
                              </p>
                              <p><span style="font-size:15px"><strong>INFOLINIA: 71 342 44 44, e-mail: <a
                                  href="mailto:kontakt@supercar.pl?subject=Zapytanie&amp;body=Witam%20prosz%C4%99%20o%20informacje%20o%20....."><span
                                  style="color:#000">kontakt@supercar.pl</span></a></strong></span></p>
                              <p>&nbsp;</p>
                              <p>
                                <a href="http://www.supercar.pl/Wyszukiwarka" target="_blank">
                                  <img src="images/about-us.jpg"/>
                                </a>
                              </p>
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
  name: "about_us",
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