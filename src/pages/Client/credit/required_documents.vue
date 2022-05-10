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
                            <h1 class="blog_entry-title">Wymagane dokumenty</h1>
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


                          <div class="thm-post" style="clear: both; margin-top: 50px">

                            <h2>Wymagane dokumenty - PROCEDURA UPROSZCZONA</h2>

                            <h4>Osoby fizyczne prowadzące działalność gospodarczą</h4>
                            <ul>
                              <li><b>oświadczenie (nie zaświadczenie)</b> wnioskodawcy o niezaleganiu z opłatą podatku i
                                składek
                                ZUS na dzień złożenia wniosku o kredyt wraz z dowodami wpłat podatku i składek za
                                ostatni
                                miesiąc
                              </li>
                              <li><b>oświadczenie (nie zaświadczenie)</b> wnioskodawcy o wysokości</li>
                              <li>osiąganych dochodów</li>
                              <li>zaświadczenie o wpisie do ewidencji działalności gospodarczej</li>
                              <li>REGON</li>
                              <li>NIP</li>
                              <li>dowód osobisty i inny dokument stwierdzający tożsamość</li>
                            </ul>


                            <h4>Osoby fizyczne</h4>

                            <ul>
                              <li>oświadczenie (nie zaświadczenie) wnioskodawcy o źródłach i wysokości</li>
                              <li>osiąganych dochodów</li>
                              <li>dowód osobisty i inny dokument stwierdzający tożsamość</li>
                            </ul>

                            <h2>Wymagane dokumenty - PROCEDURA STANDARDOWA</h2>

                            <h4>Osoby fizyczne prowadzące działalność gospodarczą</h4>
                            <ul>
                              <li><b>oświadczenie (nie zaświadczenie)</b> wnioskodawcy o niezaleganiu z opłatą podatku i
                                składek
                                ZUS na dzień złożenia wniosku o kredyt wraz z dowodami wpłat podatku i składek za
                                ostatni
                                miesiąc
                              </li>
                              <li><b>oświadczenie (nie zaświadczenie)</b> wnioskodawcy o wysokości</li>
                              <li>osiąganych dochodów</li>
                              <li>zaświadczenie o wpisie do ewidencji działalności gospodarczej</li>
                              <li>REGON</li>
                              <li>NIP</li>
                              <li>dowód osobisty i inny dokument stwierdzający tożsamość</li>
                            </ul>


                            <h4>Osoby fizyczne</h4>

                            <ul>
                              <li>oświadczenie (nie zaświadczenie) wnioskodawcy o źródłach i wysokości</li>
                              <li>osiąganych dochodów</li>
                              <li>dowód osobisty i inny dokument stwierdzający tożsamość</li>
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
  name: "required_documents",
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