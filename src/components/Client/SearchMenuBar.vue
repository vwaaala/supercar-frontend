<template>

  <div class="collapse navbar-collapse">
    <form class="navbar-form" role="search">
      <div class="input-group">
        <input class="form-control" v-model="search_string" placeholder="Search" type="text"
               @focusin="open_popup"
               @focusout="close_popup"
        >
        <span class="input-group-btn">
          <button class="search-btn" type="submit">
            <span class="glyphicon glyphicon-search">
              <span class="sr-only" v-text="'menu.search'"></span>

            </span>
          </button>
        </span>
      </div>
    </form>

    <div class="result" ref="result" v-if="search_result.length > 0">
      <div v-for="item in search_result" :key="item.id">
        <a :href="'/cars/' + item.id">
          <div class="row item">
            <div class="col-sm-3">
              <img :src="HOST+'/images/image_data/'+item.image" alt=""/>
            </div>
            <div class="col-sm-8 title"><span style="color: #259ddd; font-weight: 100">{{ item.id }}</span>
              <br>{{ item.title }} <br>
              <span style="color: rgba(255,76,76,0.73)">{{ item.cash }} PLN </span>
            </div>
          </div>
        </a>
        <hr/>
      </div>
    </div>

  </div>

</template>
<script>
import CarService from '@/services/car'
import {HOST} from "@/services/rest_api_service";

export default {
  name: 'SearchMenuBar',
  data: function () {
    return {
      search_string: '',
      search_result: [],
      HOST: HOST
    }
  },
  methods: {
    open_popup: function () {
      if (!this.$refs.result) return
      this.$refs.result.hidden = false
    },
    close_popup: function () {
      setTimeout(() => {
        if (!this.$refs.result) return
        this.$refs.result.hidden = true
      }, 300)
    },
    do_search: async function (search_string) {
      if (!search_string) {
        this.search_result = []
        return
      }

      this.search_result = (await CarService.get_items({q: search_string, limit: 5})).data.items

    }
  },
  watch: {
    search_string: function (new_val) {
      this.do_search(new_val)
    }
  }
}
</script>

<style scoped>
.result {
  position: absolute;
  background: white;
  width: 430px;
  right: 0;
  border-radius: 5px;
  padding: 5px;
}


.result img {
  border-radius: 5px;
  width: 100%;
  object-fit: fill;
}

.title {
  font-size: 1.7rem;
  text-align: left;
  white-space: nowrap;
  padding-left: 5px;
  overflow: hidden;
  font-weight: 600;
  color: #3a3a3a;
}

hr {
  padding: 0px;
  margin: 5px;
}
</style>