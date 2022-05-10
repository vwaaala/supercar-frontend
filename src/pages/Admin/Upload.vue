<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 ml-auto mr-auto">

        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <h2 class="card-title text-center">Upload Data</h2>
          </div>

          <div class="card-body">
            <div class="row">
              <b-col cols="12">
                <b-form @submit="onSubmit">
                  <b-form-group label="Site">
                    <b-form-select
                        v-model="form.site"
                        :options="[{ text: 'Choose...', value: null }, 'somesite.car.com', 'someothersite.com']"
                        :value="null"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group label="Default:">
                    <b-form-file id="file-default" v-model="form.file"></b-form-file>
                  </b-form-group>

                  <b-button type="submit" variant="info"> Upload</b-button>
                </b-form>
              </b-col>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {upload_data} from "@/services/car";

export default {
  name: "Upload",
  data: function () {
    return {
      form: {
        site: '',
        file: null
      }
    }
  },
  methods: {
    onSubmit(event) {
      console.log('submit')

      event.preventDefault()
      console.log(this.form)
      upload_data(this.form.file)
    },
  }
}
</script>

<style scoped>

</style>