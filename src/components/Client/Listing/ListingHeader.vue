<template>
  <div class="page-heading" :style="{'background-image': 'url('+background+')'}">
    <div class="page-title">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'background'],
  name: "ListingHeader"
}
</script>

<style scoped>

</style>