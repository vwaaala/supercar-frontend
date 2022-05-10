<template>
  <b-row class="justify-content-md-center">
    <b-modal ref="my-modal" size="lg" hide-footer title="Add Brand">
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
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Category:*"
            label-for="input-2"
          >
            <b-form-select v-model="form.id_group" :options="this.groups"></b-form-select>
            <div v-if="this.error.category" class="mt-2 text-danger">{{ this.error.category }}</div>
          </b-form-group>

          <b-form-group id="input-group-3" label="Title:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.title"
              placeholder="Enter Title"
            ></b-form-input>
            <div v-if="this.error.title" class="mt-2 text-danger">{{ this.error.title }}</div>
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
          id_group: '',
          title: ''
      },
      error:{
        title:'',
        category:''
      },
      show: true,
      isAdd:false,
      rows: [],
      columns: [],
      groups:[],
      config: {
        server_mode: true,
        card_title: "Brand",
        per_page_options: [12, 24, 48],
        show_refresh_button: false,
        show_reset_button: false,

        card_mode: true,
        rows_selectable: true,
        highlight_row_hover: true,
      },
      actions: [
        {
          btn_text: "Add Brand",
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
      // alert(JSON.stringify(item_info))
      this.form.title=item_info.title
      this.form.id=item_info.id
      this.form.id_group=item_info.group_info.id
      // alert(JSON.stringify(this.form))
      this.isAdd=false
      this.$refs['my-modal'].show()
    },
    onArchive(item) {
      console.log(item)
      this.service.archive("brand",item.id).then(() => {
          this.$bvToast.toast(`Archive status has been changed`, {
            title:'Brand',
            toaster:'b-toaster-top-center',
            autoHideDelay: 3000
          })
        this.$set(item, 'archived', !item.archived)
      })
    },
    row_clicked: function (item_id) {
      // console.log(object.id_group_item.id)
      this.$router.push(this.service.api_path + '/' + item_id)
    },
    onChangeQuery(queryParams) {
      console.log("onChangeQuery"+JSON.stringify(queryParams))
      this.get_data(
          queryParams.page,
          queryParams.per_page,
          queryParams.sort[0] && queryParams.sort[0].name,
          queryParams.global_search,
          (queryParams.sort[0] === undefined) ? "desc" : queryParams.sort[0].order
      )
    },
    async get_data(page = 1, limit = 12, sort = 'id', q = '', order = 'desc') {
      let params = {page: page, limit: limit, sort: sort, order: order}
      if (q) {
        params['q'] = q
      }
      let response = (await this.service.get_all_items("brand",params)).data
      var items=response.items
      for (var key in items) {
        var item = items[key];
        var group_info=item["group_info"]
        console.log(group_info)
        group_info === null ? item["group"]="" : item["group"]=group_info.title
      }
      this.rows = items
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
      this.form.id_group=''
    },
    onUpdateItem(){
      console.log("onUPdate item")
      if (!this.form.title){
          this.error.title="Please enter title"
          return
      }
      this.service.update("brand",this.form).then(response => {
          console.log('group updated', response)
          this.$bvToast.toast(`Group has been successfully updated`, {
            title:'Brand',
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
        // alert(JSON.stringify(this.form))   
        if (!this.form.id_group){
            this.error.category="Please select category"
            return
        } else if (!this.form.title){
            this.error.title="Please enter title"
            return
        }

        this.service.create("brand",this.form).then(response => {
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
    let response = (await this.service.get_all_items("brand")).data
    console.log(response)
    if (response.items.length === 0) return

    let items = response.items
    for (var key in items) {
        var item = items[key];
        var group_info=item["group_info"]
        group_info === null ? item["group"]="" : item["group"]=group_info.title
    }
    this.rows = items
    console.log(this.rows)

    this.columns = Object.keys(items[0])
    .filter(key =>
        ['archived', 'id_group', 'group_info', 'images', 'created_at', 'last_updated'].indexOf(key) === -1)
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
    let params = {page: 1, limit: 100, sort: "id", order: "asc"}
    let resGroup = (await this.service.get_all_items("groups",params)).data
    let grouplist=resGroup.items
    var newGroupList=[]
    for (let key in grouplist){
        let item=grouplist[key]
        var newItem={
            "value":item.id,
            "text":item.title
        }
        newGroupList.push(newItem)
    }

    this.groups=newGroupList
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