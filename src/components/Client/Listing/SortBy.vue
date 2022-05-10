<template>
  <div id="sort-by">
    <label class="left">{{ $t('navigation.sort_by') }}: </label>
    <ul>
      <li>
        <a href="#">{{ $t(selected.toLowerCase()) }}<span class="right-arrow"></span></a>
        <ul>
          <li v-for="option in options" :key="option" @click="option_selected(option, $event)">
            <a> {{ $t(option) }} </a>
          </li>
        </ul>
      </li>
    </ul>
    <a class="button-asc left" href="#" title="Set Descending Direction"><span
        class="top_arrow"></span></a>
  </div>
</template>
<script>
import {capitalizeFirstLetter} from "@/services/utils";

export default {
  name: 'SortBy',
  data: function () {
    return {
      'selected': this.$route.query.sort || 'Updated',
      'options': [
        'updated',
        'price',
      ]
    }
  },
  methods: {
    option_selected: function (option, event) {
      event.preventDefault()
      if (option === this.selected) return

      this.selected = option
      this.$store.state.sort = option;
      this.$router.replace(
          {
            query: Object.assign({...this.$route.query}, {sort: this.selected}),
          },
          () => {
          }
      )
    },
    capitalizeFirstLetter: capitalizeFirstLetter,
  },
  watch: {
    '$store.state.sort': function (new_val) {
      this.selected = new_val
    },
    '$route.query.sort': function (new_val) {
      if (!new_val) return;

      this.selected = new_val
    }
  },
  i18n: {
    messages: {
      en: {
        updated: 'Updated',
        price: 'Price'
      },
      pl: {
        updated: 'Zaktualizowano',
        price: 'Cena'
      }
    }
  }
}
</script>
<style scoped>
</style>