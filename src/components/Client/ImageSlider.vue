<template>
  <div>
    <div class="product-full">
      <transition name="fade">
        <img :src="get_image_url(selected)" alt="product image" style="width: 100%" :key="selected"/>
      </transition>
      <div class="navigate">
        <div class="owl-prev"><a class="flex-prev" @click="prev()"></a></div>
        <div class="owl-next"><a class="flex-next" @click="next()"></a></div>
      </div>
    </div>


    <div class="row" style="margin: 0px; margin-top: 10px">
      <div v-for="(image, index) in this.images" :key="image.image" class="col-md-4 thumbnail small-thumb">
        <img :src="get_image_url(image.image)" @click="thumb_clicked(index)" alt="product image"
             :class="{'thumb-selected': index === selected_index}"/>
      </div>
    </div>
  </div>

</template>
<script>
import {get_image_url} from '@/services/rest_api_service';

export default {
  name: 'ImageSlider',
  props: ['images'],
  data: function () {
    return {
      selected: this.images && this.images[0] && this.images[0].image || null,
      selected_index: 0
    }
  },
  methods: {
    thumb_clicked: function (index) {
      this.selected_index = index;
      this.selected = this.images[index].image
    },
    get_image_url: get_image_url,
    next: function () {
      if (this.selected_index < this.images.length - 1) {
        this.selected_index += 1;
      } else {
        this.selected_index = 0;
      }

      this.selected = this.images[this.selected_index].image;
    },
    prev: function () {
      if (this.selected_index > 0) {
        this.selected_index -= 1;
      } else {
        this.selected_index = this.images.length - 1;
      }

      this.selected = this.images[this.selected_index].image;

    }
  },
  watch: {
    images: function (new_val) {
      console.log('Image data changed: ', new_val)
      this.selected = new_val[0].image;
      this.selected_index = 0;
    }
  }
}
</script>

<style>
.small-thumb {
  padding: 6px !important;
  margin-bottom: 0px !important;
}
</style>

<style scoped>
.navigate a {
  position: absolute;
  width: 32px;
  height: 34px;
  background: rgba(51, 51, 51, 0.78);
  text-align: center;
  color: #ed6663;
  cursor: pointer;
}

.owl-prev a {
  left: 3%;
  top: 50%;
}

.owl-next a {
  left: 91%;
  top: 50%;
}

.owl-prev a:before {
  font-family: 'FontAwesome';
  font-style: normal;
  font-weight: bold;
  speak: none;
  -webkit-font-smoothing: antialiased;
  content: "\f104";
  text-transform: none;
  font-size: 32px;
  width: 32px !important;
  height: 32px !important;
  line-height: 34px;
}

.owl-next a:before {
  font-family: 'FontAwesome';
  font-style: normal;
  font-weight: bold;
  speak: none;
  -webkit-font-smoothing: antialiased;
  content: "\f105";
  text-transform: none;
  font-size: 32px;
  width: 32px !important;
  height: 32px !important;
  line-height: 34px;
}

.thumbnail img {
  cursor: pointer !important;
  height: 109px;
  object-fit: cover;
}

.product-full {
  position: relative;
  height: 400px;
}

.product-full img {
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-full .fade-leave-active {
  position: relative;
}

.product-full .fade-enter-active {
  position: absolute;
  left: 0;
  top: 0;
}

.thumbnail img {
  cursor: pointer !important;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: box-shadow .3s;

}

.thumbnail img:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, .7);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
  width: inherit;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.thumb-selected {
  border: 4px solid #ed6663 !important;
}
</style>