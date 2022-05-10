<template>
  <b-row class="justify-content-md-center">
    <b-modal ref="my-modal" size="lg" hide-footer title="Add Category">
      <div >      
        <b-form >
          <b-form-group
            id="input-group-1"
            label="ID"
            label-for="input-1"
            v-if="!this.isAdd"
          >
            <b-form-input
              id="input-1"
              v-model="form.id"
              placeholder="Enter Id"
              disabled
              required
            ></b-form-input>
            <div v-if="this.error.title" class="mt-2 text-danger">{{ this.error.title }}</div>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Title:*"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.title"
              placeholder="Enter Title"
              required
            ></b-form-input>
            <div v-if="this.error.title" class="mt-2 text-danger">{{ this.error.title }}</div>
          </b-form-group>

          <b-form-group id="input-group-3" label="Title Autopanel:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.title_autopanel"
              placeholder="Enter Title Autopanel"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Identy Ficator:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.identyfikator"
              placeholder="Enter Identy Fkcator"
            ></b-form-input>
          </b-form-group>

          <div class="bs-example">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12 bg-light text-right">
                          <button v-if="this.isAdd" type="button" class="btn btn-primary" @click="onClear()">Clear</button>
                          <button v-if="!this.isAdd" type="button" class="btn btn-warning ml-2" @click="onUpdateItem()">Update</button>
                          <button v-if="this.isAdd" type="button" class="btn btn-warning ml-2" @click="onSubmit()">Save</button>
                      </div>
                  </div>
              </div>
          </div>
          
          
        </b-form>
      </div>
    </b-modal>
    <b-col col xl="11" lg="12">
      <vue-bootstrap4-table
          :rows="rows"
          :columns="columns"
          :config="config"
          @on-change-query="onChangeQuery"
          :total-rows="total_rows"
          :class="{table:'table table-responsive table-bordered table-striped'}"
          :actions="actions"
          @on-download="onDownload"
      >

        <template slot="action-slot" slot-scope="props">
          <button type="button" class="btn btn-primary btn-sm action-btn" @click="onEdit(props.row)">Edit</button>
          <button type="button" class="btn btn-warning btn-sm action-btn" @click="onArchive(props.row)"
                  v-if="props.row.archived">UnArchive
          </button>
          <button type="button" class="btn btn-danger btn-sm action-btn" @click="onArchive(props.row)" v-else>Archive
          </button>

        </template>
      </vue-bootstrap4-table>
    </b-col>
  </b-row>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table'

export default {
  name: "TableData",
  props: ['service'],
  components: {VueBootstrap4Table},
  data: function () {
    return {
      form: {
          title: '',
          title_autopanel: '',
          identyfikator: ''
      },
      error:{
        title:''
      },
      show: true,
      isAdd:false,
      rows: [],
      columns: [],
      config: {
        server_mode: true,
        card_title: "Category",
        per_page_options: [12, 24, 48],
        show_refresh_button: false,
        show_reset_button: false,

        card_mode: true,
        rows_selectable: true,
        highlight_row_hover: true,
      },
      actions: [
        {
          btn_text: "Add Category",
          event_name: "on-download",
          event_payload: {
            msg: "my custom message"
          }
        }
      ],
      total_rows: 0
    }
  },
  methods: {
    onEdit(item_info) {
      this.form=item_info
      this.isAdd=false
      this.$refs['my-modal'].show()
    },
    onArchive(item) {
      console.log(item)
      this.service.archive("groups",item.id).then(() => {
          this.$bvToast.toast(`Archive status has been changed`, {
            title:'Category',
            toaster:'b-toaster-top-center',
            autoHideDelay: 3000
          })
        this.$set(item, 'archived', !item.archived)
      })
    },
    row_clicked: function (item_id) {
      // console.log(object.selected_item.id)
      this.$router.push(this.service.api_path + '/' + item_id)
    },
    onChangeQuery(queryParams) {
      console.log("onChangeQuery"+JSON.stringify(queryParams))
      this.get_data(
          queryParams.page,
          queryParams.per_page,
          queryParams.sort[0] && queryParams.sort[0].name,
          queryParams.global_search,
          (queryParams.sort[0] === undefined ) ? "desc" : queryParams.sort[0].order
      )
    },
    async get_data(page = 1, limit = 12, sort = 'id', q = '', order = 'desc') {
      let params = {page: page, limit: limit, sort: sort, order: order}
      if (q) {
        params['q'] = q
      }
      let response = (await this.service.get_all_items("groups",params)).data

      this.rows = response.items
      this.total_rows = response.pages * limit
    },
    onDownload() {
      this.onClear()
      this.isAdd=true
      this.$refs['my-modal'].show()
    },
    onClear() {
      this.form.id=''
      this.form.title=''
      this.form.title_autopanel=''
      this.form.identyfikator=''
      this.error.title=''
    },
    onUpdateItem(){
      console.log("onUPdate item")
      if (!this.form.title){
          this.error.title="Please enter title"
          return
      }
      this.service.update("groups",this.form).then(response => {
          console.log('group updated', response)
          this.$bvToast.toast(`Group has been successfully updated`, {
            title:'Category',
            toaster:'b-toaster-top-center',
            autoHideDelay: 3000
          })
          this.$refs['my-modal'].hide()
          this.get_data()
          this.onClear()

        }).catch(error => {
          console.log('group creation error', error.response)
          if ([400, 409].includes(error.response.status)) {
            this.error_message = error.response.data.detail
          } else {
            this.error_message = "Something went wrong" 
          }
          this.$bvToast.toast(this.error_message, {
            title:'Group',
            autoHideDelay: 3000
          })
      })
    },
    onSubmit() {   
        if (!this.form.title){
          this.error.title="Please enter title"
          return
        }
        this.service.create("groups",this.form).then(response => {
          console.log('group created', response)
          this.$bvToast.toast(`Group has been successfully created`, {
            title:'Group',
            toaster:'b-toaster-top-center',
            autoHideDelay: 3000
          })
          this.$refs['my-modal'].hide()
          this.get_data()
          this.onClear()

        }).catch(error => {
          console.log('group creation error', error.response)
          if ([400, 409].includes(error.response.status)) {
            this.error_message = error.response.data.detail
          } else {
            this.error_message = "Something went wrong" 
          }
          this.$bvToast.toast(this.error_message, {
            title:'Group',
            autoHideDelay: 3000
          })
        })
      }
    },
  async created() {
    let response = (await this.service.get_all_items("groups")).data
    console.log(response)
    if (response.items.length === 0) return

    let items = response.items
    this.rows = items
    console.log(this.rows)

    this.columns = Object.keys(items[0])
        .filter(key =>
            ['archived', 'image', 'description', 'images', 'created_at', 'last_updated'].indexOf(key) === -1)
        .map(key => {
          if (['link'].indexOf(key) > -1) return
          return {label: key, name: key, sort: true}
        })

    this.columns.push({
      label: "Actions",
      name: "id",
      slot_name: "action-slot",
    })
    this.$set(this.config, 'per_page', items.length)
    this.total_rows = response.limit * response.pages
  }
}
</script>

<style scoped>
.action-btn {
  margin-right: 5px;
  margin-bottom: 5px;
}

tr {
  cursor: pointer !important;
}
</style>
<style>
tr {
  cursor: pointer !important;
}

.vbt-global-search{

}
</style>