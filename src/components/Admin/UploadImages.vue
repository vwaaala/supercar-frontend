<template>
  <div>
    <b-row>
      <b-col v-for="(image_url, image_name) of image_preview_urls" :key="image_name">
        <img class="product-images" :src="image_url" alt="" :ref="image_name">
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="mt-3">
        <b-form-file
            v-model="images_selected"
            placeholder="Choose images or drop it here..."
            drop-placeholder="Drop file here..."
            multiple
        ></b-form-file>
      </b-col>
    </b-row>

  </div>
</template>
<script>
import {get_image_url} from "@/services/rest_api_service";

export default {
  name: 'UploadImages',
  props: ['images'],
  data: function () {
    return {
      images_selected: [],
      image_preview_urls: {'null': get_image_url(null)}
    }
  },
  methods: {
    readURL(file) {
      return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onload = e => res(e.target.result);
        reader.onerror = e => rej(e);
        reader.readAsDataURL(file);
      });
    }
  },
  watch: {
    images_selected: async function (files) {

      if (!files || files.length === 0) return

      let preview_urls = {}
      for (let file of files) {
        console.log('image file', file)
        // noinspection JSUnfilteredForInLoop
        preview_urls[file.name] = await this.readURL(file)
      }
      if (!preview_urls) {
        this.$emit('change', [])
        return
      }

      this.image_preview_urls = preview_urls
      this.$emit('change', files)

    },
    images: function (images) {
      if (!images || images.length === 0) {
        // this.image_preview_urls = {'null': get_image_url('null')}
        return
      }
      this.image_preview_urls = images
    }
  }
}
</script>
<style scoped>

.product-images {
  width: 100%;
  max-width: 200px;
  min-width: 100px;
  border-radius: 10px;
  margin: 5px;
}

.product-thumb {
  width: 100% !important;
}
</style>