<template>
  <div class="custom-slider">
    <div>
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li class="active" data-slide-to="0" data-target="#carousel-example-generic"></li>
          <li class="" data-slide-to="1" data-target="#carousel-example-generic"></li>
          <li class="" data-slide-to="2" data-target="#carousel-example-generic"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active"><img alt="slide3" src="/images/slide3.jpg">
            <div class="carousel-caption">
              <h3><a href="/" title=" Sample Product">50% OFF</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a class="link" href="#">Buy Now</a>
            </div>
          </div>
          <div class="item"><img alt="slide1" src="/images/slide1.jpg">
            <div class="carousel-caption">
              <h3><a href="/" title=" Sample Product">Hot collection</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="item"><img alt="slide2" src="/images/slide2.jpg">
            <div class="carousel-caption">
              <h3><a href="/" title=" Sample Product">Summer collection</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <a class="left carousel-control" data-slide="prev" href="#carousel-example-generic"> <span
            class="sr-only">Previous</span> </a> <a class="right carousel-control"
                                                    data-slide="next" href="#carousel-example-generic"> <span
          class="sr-only">Next</span> </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBarAdSlider'
}
</script>