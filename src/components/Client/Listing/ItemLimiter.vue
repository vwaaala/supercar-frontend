<template>
  <div class="pager">
    <div id="limiter">
      <label>{{ $t('navigation.view') }}: </label>
      <ul>
        <li>
          <a href='#'> {{ limit }}<span class="right-arrow"></span></a>
          <ul>
            <li><a class="custom-btn" href="#" @click="change_limit(12, $event)">12</a></li>
            <li><a class="custom-btn" href="#" @click="change_limit(21, $event)">21</a></li>
            <li><a class="custom-btn" href="#" @click="change_limit(30, $event)">30</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="pages">
      <label>{{ $t('navigation.page') }}:</label>
      <ul class="pagination">
        <li><a class="custom-btn" @click="change_page(1)">&laquo;</a></li>
        <li v-for="page_no in page_no_list" :key="page_no" :class="{active: is_active_page(page_no)}">
          <a class="custom-btn" @click="change_page(page_no)">{{ page_no }}</a>
        </li>
        <li><a class="custom-btn" @click="change_page($store.state.total_pages)">&raquo;</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {range} from 'lodash';

export default {
  name: "ItemLimiter",
  data: function () {
    return {
      limit: 12,
      page_no: parseInt(this.$route.query.page || 0)
    }
  },
  methods: {
    change_limit: function (value, event) {
      event.preventDefault()

      console.log('changing limit to ', value)
      this.limit = value;
      this.$store.state.limit = value;

      this.$router.replace(
          {
            query: Object.assign({...this.$route.query}, {limit: value}),
          },
          () => {
          }
      )

    },
    change_page: function (value) {
      this.page_no = value;
      this.$router.replace(
          {
            query: Object.assign({...this.$route.query}, {page: value}),
          },
          () => {
          }
      )
    },
    is_active_page: function (page_no) {
      return this.page_no === page_no
    }
  },
  computed: {
    page_no_list: function () {
      if (this.$store.state.total_pages < 6) {
        return range(1, this.$store.state.total_pages + 1)
      } else if (this.page_no < 5) {
        return range(1, 6)
      } else {
        let pages = [
          this.page_no - 2,
          this.page_no - 1,
          this.page_no,
        ]
        for (let idx = this.page_no + 1; idx <= this.$store.state.total_pages && idx <= (this.page_no + 2); idx++) {
          pages.push(idx)
        }
        return pages
      }
    }
  },
  watch: {
    '$route.query.page': function (new_val) {
      if (!new_val) {
        this.page_no = 1
        return;
      }
      new_val = parseInt(new_val)

      if (this.page_no === new_val) {
        return
      }
      this.page_no = new_val
    },
    '$route.query.limit': function (new_val) {
      if (!new_val) {
        this.limit = 12
        return;
      }
      new_val = parseInt(new_val)

      if (this.limit === new_val) {
        return
      }
      this.limit = new_val
    }
  }
}
</script>

<style scoped>
.custom-btn {
  cursor: pointer !important;
  width: 100%;
}

</style>