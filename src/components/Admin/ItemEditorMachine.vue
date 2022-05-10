<template>
  <b-row class="justify-content-md-center">
    <b-col col xl="7" lg="10" md="12">
      <form class="validated" novalidate v-if="field_data" :class="[validated?'was-validated':'need-validation']">
        <b-row>
          <b-col>
            <label for="title">Title</label>
            <input id="title" type="text" class="form-control" placeholder="" v-model="data.title" required>
            <div class="invalid-feedback" v-if="error_object.title">
              {{ error_object['title'] }}
            </div>
          </b-col>
        </b-row>

        <hr/>
        <h4>Finance</h4>
        <b-row>
          <b-col cols="4">
            <label for="cash">Cash</label>
            <input id="cash" type="number" class="form-control" placeholder="" v-model="data.cash" required>
            <div class="invalid-feedback" v-if="error_object.cash">
              {{ error_object['cash'] }}
            </div>
          </b-col>
          <b-col cols="4">
            <label for="leasing">Leasing</label>
            <input id="leasing" type="number" class="form-control" placeholder="" v-model="data.leasing" required>
            <div class="invalid-feedback" v-if="error_object.leasing">
              {{ error_object['leasing'] }}
            </div>
          </b-col>
          <b-col cols="4">
            <label for="credit">Credit</label>
            <input id="credit" type="number" class="form-control" placeholder="" v-model="data.credit" required>
            <div class="invalid-feedback" v-if="error_object.credit">
              {{ error_object['credit'] }}
            </div>
          </b-col>
        </b-row>
        <hr/>

        <h4 class="mb-3">Information</h4>
        <b-row>
          <b-col cols="4"  class="mb-4">
            <label for="brand" style="text-transform: capitalize">Category</label>
            <select class="form-control" v-model="selectedGroup" @change="onChangeGroup(selectedGroup)" required>
              <option v-for="group in this.master_data.groups" v-bind:value="{ id: group.id, text: group.title }" :key="group.id">
                {{ group.title }}
              </option>
            </select>  
          </b-col>
          <b-col cols="4"  class="mb-4">
            <label for="brand" style="text-transform: capitalize">Types</label>
            <select class="form-control" v-model="selectedType"  >
              <option v-for="type in this.master_data.subGroupBasedOnGroup" v-bind:value="{ id: type.id, text: type.title }" :key="type.id">
                {{ type.title }}
              </option>
            </select>  
          </b-col>
          <b-col cols="4"  class="mb-4">
            <label for="brand" style="text-transform: capitalize">Manufacturer</label>
            <select class="form-control" v-model="selectedBrand"  >
              <option v-for="brand in this.master_data.brandsBasedOnGroup" v-bind:value="{ id: brand.id, text: brand.title }" :key="brand.id">
                {{ brand.title }}
              </option>
            </select>  
          </b-col>
          <b-col cols="4"  class="mb-4">
            <label for="brand" style="text-transform: capitalize">Year</label>
            <select class="form-control" v-model="selectedYear" required>
              <option v-for="year in this.years" v-bind:value="{ year }" :key="year">
                {{ year }}
              </option>
            </select>  
          </b-col>
          <b-col cols="4"  class="mb-4">
            <label for="brand" style="text-transform: capitalize">Technical Condition</label>
            <select class="form-control" v-model="selectedState"  required>
              <option v-for="state in this.master_data.technical_states" v-bind:value="{ id: state.id, text: state.title }" :key="state.id">
                {{ state.title }}
              </option>
            </select>  
          </b-col>
          <b-col cols="4" v-for="key in filtered_keys" :key="key" class="mb-4">

            <div>
              <label :for="key" style="text-transform: capitalize">{{ key.replace('_', ' ') }}</label>
              <input :id="key" :type="field_data[key].type" class="form-control" placeholder="" v-model="data[key]"
                    :required="field_data[key].required" >

              <div class="invalid-feedback" v-if="error_object[key]">
                {{ error_object[key] }}
              </div>
            </div>
          </b-col>
        </b-row>

        <hr/>

        <h4 class="mb-3">Images</h4>
        <b-row>
          <b-col cols="5">
            <UploadImage :image="get_image_url(data.image)" @change="image_selected"/>
          </b-col>
          <b-col cols="7">
            <UploadImages :images="get_images_url(data.images)" @change="images_selected"/>
          </b-col>
        </b-row>
        <hr/>

        <h4 class="mb-3">Description</h4>
        <b-row>
          <b-col cols="12">
            <vue-editor v-model="description_content"></vue-editor>
          </b-col>
        </b-row>
        <!--        <b-row>-->
        <!--          <b-col cols="12">-->
        <!--            <textarea style="width: 100%" rows="50" v-model="content"></textarea>-->
        <!--          </b-col>-->
        <!--        </b-row>-->

        <hr/>
        <b-row class="justify-content-end">
          <b-col cols="4" v-if="!create">
            <button class="btn btn-warning btn-block" v-if="data.archived" @click="archive_item(data.id)">
              UnArchive
            </button>
            <button class="btn btn-danger btn-block" v-else @click="archive_item(data.id)">Archive</button>
          </b-col>

          <b-col cols="4">
            <button class="btn btn-success btn-block" @click.prevent="create_item">Save</button>
          </b-col>
        </b-row>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import {VueEditor} from "vue2-editor";
import "vue2-editor/dist/vue2-editor.css";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';
import sanitizeHtml from 'sanitize-html';
import UploadImages from "@/components/Admin/UploadImages";
import UploadImage from "@/components/Admin/UploadImage";
import {get_image_url} from "@/services/rest_api_service";


export default {
  name: "ItemEditor",
  components: {UploadImages, VueEditor, UploadImage},
  props: {
    service: undefined,
    create: Boolean
  },
  data: function () {
    return {
      field_data: {},
      description_content: '',
      validated: false,
      error_object: {},
      data: {},
      master_data:{},
      selectedGroup:{},
      selectedType:{},
      selectedBrand:{},
      selectedState:{},
      selectedYear:{},
      image: null,
      images: null
    }
  },
  computed: {
    filtered_keys: function () {
      return Object.keys(this.data).filter(key =>
          [
            'id',
            'title',
            'description',
            'brand',
            'model',
            'year',
            'type',
            'cash',
            'leasing',
            'credit',
            'image',
            'images',
            'user',
            'link',
            'approval',
            'created_at',
            'last_updated',
            'archived',
            'group',
            'manufacturer',
            'technical_condition'
          ].indexOf(key) === -1)
    },
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index)
    }
  },
  methods: {
    archive_item(item_id) {
      this.service.archive(item_id).then((response) => {
        alert('Item Updated!')
        this.data = response.data
      })
    },
    image_selected: function (image) {
      this.image = image
    },
    images_selected: function (images) {
      this.images = images
    },
    get_image_url: get_image_url,
    get_images_url: function (images) {
      if (!images || !images.length) return []
      return images.map(image => get_image_url(image.image))
    },
    async get_post_fields() {
      return (await this.service.get_fields()).data
    },
    async get_post_master_data() {
      return (await this.service.get_master_data()).data
    },
    redirect(item_id) {
      if (this.create) {
        this.$router.push(`./${item_id}`)
      } else {
        this.$router.push(`../${item_id}`)
      }
    },
    cleanup_html: function (description) {
      return sanitizeHtml(description, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'li', 'ul', 'ol', 'br', 'hr', 'span'],
      })
    },
    set_materdata_html: function () {

      let current_group=this.data.group
      let current_group_info={}
      this.master_data.groups.forEach(function(group){
          if ( group.title == current_group){
            current_group_info=group
          }
      });
      this.selectedGroup = {
        id:current_group_info.id,
        text:current_group_info.title
      }
      
      // Extract sub category (type ) based on group (category)

      this.master_data.subGroupBasedOnGroup = this.master_data.types.filter(function(item)
      {
        return item.id_group==current_group_info.id;
      });

      let current_type=this.data.type
      let current_type_info={}
      this.master_data.subGroupBasedOnGroup.forEach(function(type){
          if ( type.title == current_type){
            current_type_info=type
          }
      });
      this.selectedType = {
        id:current_type_info.id,
        text:current_type_info.title
      }

      // Extract brand based on group (category)
      this.master_data.brandsBasedOnGroup = this.master_data.brands.filter(function(item)
      {
        return item.id_group==current_group_info.id;
      });

      
      let current_brand=this.data.manufacturer
      let current_brand_info={}
      this.master_data.brandsBasedOnGroup.forEach(function(brand){
          if ( brand.title == current_brand){
            current_brand_info=brand
          }
      });
      this.selectedBrand = {
        id:current_brand_info.id,
        text:current_brand_info.title
      }

      // Extract brand based on group (category)
      let current_technical_state=this.data.technical_condition
      let current_technical_state_info={}
      this.master_data.technical_states.forEach(function(technical_state){
          if ( technical_state.title == current_technical_state){
            current_technical_state_info=technical_state
          }
      });
      console.log(current_technical_state_info)
      this.selectedState = {
        id:current_technical_state_info.id,
        text:current_technical_state_info.title
      }

      let current_year=this.data.year
      this.selectedYear = {
        year: current_year
      }
    },
    onChangeGroup: function(group){
      this.master_data.brandsBasedOnGroup = this.master_data.brands.filter(function(item)
      {
        return item.id_group==group.id;
      });
      this.master_data.subGroupBasedOnGroup = this.master_data.types.filter(function(item)
      {
        return item.id_group==group.id;
      });
    },
    create_item: function () {
      
      this.data={
        ...this.data,
        group:this.selectedGroup === undefined ? "" :this.selectedGroup.text,
        type:this.selectedType === undefined ? "" :this.selectedType.text,
        manufacturer:this.selectedBrand === undefined ? "" :this.selectedBrand.text,
        technical_condition:this.selectedState.text,
        year:this.selectedYear.year

      }
      alert(JSON.stringify(this.selectedType))
      let action_function;
      if (this.create) {
        action_function = this.service.create.bind(this.service);
      } else {
        action_function = this.service.update.bind(this.service);
      }
      this.data.description = this.description_content

      action_function(this.data, this.image).then(response => {
        this.data = response.data
        if (this.images) {
          this.update_images(this.images).then((res) => {
            console.log('image uploaded: ', res)
            this.redirect(this.data.id)
          }).catch(error => {
            console.log('image upload error', error)
          })
        } else {
          this.redirect(this.data.id)
        }
      }).catch(error => {
        console.log('upload error', error)

        for (let item of error.response.data.detail) {
          this.error_object[item.loc[1]] = item.msg
          this.validated = true
        }
      })
    },
    update_images(images) {
      if (!images) return
      return Promise.all(this.images.map(image => {
        // noinspection JSUnresolvedFunction
        this.service.add_image(this.data.id, image)
      }))
    }
  },
  watch: {},
  async created() {
    this.field_data = await this.get_post_fields()
    this.master_data = await this.get_post_master_data()
    // console.log(JSON.stringify(this.master_data))

    if (this.create) {
      let new_data = {}
      for (let key in this.field_data) {
        // noinspection JSUnfilteredForInLoop
        new_data[key] = null
      }
      this.data = new_data
    } else {
      // noinspection JSUnresolvedFunction

      this.data = (await this.service.get_item(this.$route.params.id)).data
      this.set_materdata_html()
      
      this.description_content = this.data.description ? this.cleanup_html(this.data.description) : ''
    }
  }
}
</script>
