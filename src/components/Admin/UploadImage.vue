<template>
  <div>
    <b-row>
      <b-col cols="12">
        <img class="img-preview-single" :src="image_preview_url" alt="">
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="mt-3">
        <b-form-file
            v-model="images_selected"
            :state="Boolean(images_selected)"
            placeholder="Choose thumbnail..."
            drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'UploadImage',
  props: ['image'],
  data: function () {
    return {
      images_selected: null,
      image_preview_url: 'http://localhost:8000/images/image_data/null'
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
    images_selected: async function (file) {
      if(!file){
        return
      }
      this.image_preview_url = await this.readURL(file)
      this.$emit('change', file)
    },
    'image': function (image) {
      this.image_preview_url = image
    }
  }
}
</script>
<style scoped>
.img-preview-single {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: 5px;
}
</style>