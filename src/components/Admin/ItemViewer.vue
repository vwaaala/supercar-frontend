<template>
  <b-row class="row justify-content-md-center">
    <b-col xl="9" lg="9">
      <form class="needs-validation" novalidate v-if="item_data">
        <b-row>
          <b-col cols="8">
            <label>Title</label>
            <input type="text" class="form-control" v-model="item_data.title" disabled>
          </b-col>
          <b-col cols="2">
            <label>ID</label>
            <input type="text" class="form-control" v-model="item_data.id" disabled>
          </b-col>
          <b-col cols="2">
            <label>&zwnj;</label><br/>
            <a class="btn btn-primary form-control" href="#" @click="go_to_product">View</a>
          </b-col>
        </b-row>

        <hr/>
        <h4>Finance</h4>
        <b-row>
          <b-col cols="4">
            <label>Cash</label>
            <input type="number" class="form-control" v-model="item_data.cash" disabled>
          </b-col>
          <b-col cols="4">
            <label>Leasing</label>
            <input type="number" class="form-control" v-model="item_data.leasing" disabled>
          </b-col>
          <b-col cols="4">
            <label>Credit</label>
            <input type="number" class="form-control" v-model="item_data.credit" disabled>
          </b-col>
        </b-row>
        <hr/>

        <h4 class="mb-3">Information</h4>
        <b-row>
          <b-col cols="4" v-for="key of filtered_keys" :key="key" class="mb-4">
            <label style="text-transform: capitalize">{{ key.replace('_', ' ') }}</label>
            <input type="text" class="form-control" v-model="item_data[key]" disabled>
          </b-col>
        </b-row>

        <hr/>

        <h4 class="mb-3">Image</h4>
        <b-row>
          <b-col col md="4" lg="4" sm="5">
            <img class="product-thumb" :src="get_image_url(item_data.image)" alt="">
          </b-col>
          <b-col col md="8" lg="8" sm="7">
            <b-row>
              <b-col col v-for="image in item_data.images" :key="image.image">
                <img class="product-images" :src="get_image_url(image.image)" alt="">
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <hr/>

        <h4 class="mb-3">Description</h4>
        <b-row>
          <b-col cols="12">
            <div v-html="content"></div>
          </b-col>
        </b-row>

        <hr/>
        <b-row class="justify-content-end">
          <b-col cols="4">
            <router-link :to="'/'+this.service.api_path+'/edit/'+item_data.id" class="btn btn-primary btn-block">Edit
            </router-link>
          </b-col>

        </b-row>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import "vue2-editor/dist/vue2-editor.css";
import {get_image_url} from "@/services/rest_api_service";

export default {
  name: "ItemViewer",
  props: ['service'],
  data: function () {
    return {
      item_data: {},
      content: ''
    }
  },
  methods: {
    go_to_product() {
      window.location.pathname = this.service.api_path + '/' + this.item_data.id
    },
    get_image_url: get_image_url
  },
  computed: {
    filtered_keys: function () {
      return Object.keys(this.item_data).filter(key => [
        'id', 'image', 'images', 'cash', 'leasing', 'credit', 'title', 'approval', 'last_updated', 'created_at', 'description', 'link'
      ].indexOf(key) === -1)
    }
  },
  watch: {},
  async created() {
    this.item_data = (await this.service.get_item(this.$route.params.id)).data
    this.content = this.item_data.description

    console.log(this.content)
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