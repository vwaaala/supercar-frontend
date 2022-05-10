<template>
  <div class="side-nav-categories">
    <div class="block-title"> {{$t('navigation.categories')}} </div>
    <div class="box-content box-category">
      <ul>
        <li v-for="(sub_categories, category) in categories" :key="category">
          <a href="#">{{ category.toUpperCase().replaceAll('_', ' ') }}</a>
          <span class="subDropdown minus"></span>
          <ul class="level0_455" style="display:block">
            <li v-for="sub_category in sub_categories" :key="sub_category">
              <router-link :to="{query: {[category]: sub_category}}">{{sub_category}} </router-link>
<!--              <a :href="`?` '?category='+sub_category">{{ sub_category }}</a> <span class></span>-->
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ListingCategories',
  props: ['categories'],
  methods: {
    toggle_plus_minus: function () {
      console.log('toggle')
    }
  }
}
</script>