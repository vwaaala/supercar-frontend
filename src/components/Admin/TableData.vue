<template>
  <b-row class="justify-content-md-center">
    <b-col col xl="11" lg="12">
      <vue-bootstrap4-table
          :rows="rows"
          :columns="columns"
          :config="config"
          @on-change-query="onChangeQuery"
          :total-rows="total_rows"
          :class="{table:'table table-responsive table-bordered table-striped'}"
      >

        <template slot="action-slot" slot-scope="props">
          <button type="button" class="btn btn-info btn-sm action-btn" @click="row_clicked(props.row.id)">View</button>
          <button type="button" class="btn btn-primary btn-sm action-btn" @click="onEdit(props.row.id)">Edit</button>
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
      rows: [],
      columns: [],
      config: {
        server_mode: true,
        card_title: "Passenger Cars",
        per_page_options: [12, 24, 48],
        show_refresh_button: false,
        show_reset_button: false,

        card_mode: false,
        rows_selectable: true,
        highlight_row_hover: true,
      },
      total_rows: 0
    }
  },
  methods: {
    onEdit(item_id) {
      this.$router.push(`/${this.service.api_path}/edit/${item_id}`)
    },
    onArchive(item) {
      this.service.archive(item.id).then(() => {
        alert('Item Updated!')
        this.$set(item, 'archived', !item.archived)
      })
    },
    row_clicked: function (item_id) {
      // console.log(object.selected_item.id)
      this.$router.push(this.service.api_path + '/' + item_id)
    },
    onChangeQuery(queryParams) {
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
      let response = (await this.service.get_all_items(params)).data

      this.rows = response.items
      this.total_rows = response.pages * limit
    }
  },
  async created() {
    let response = (await this.service.get_all_items()).data
    console.log(response)
    if (response.items.length === 0) return

    let items = response.items
    this.rows = items

    this.columns = Object.keys(items[0])
        .filter(key =>
            ['link', 'image', 'description', 'images', 'created_at', 'last_updated'].indexOf(key) === -1)
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