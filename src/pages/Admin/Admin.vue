<template>
  <div class="page-wrapper chiller-theme toggled">
    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
      <i class="fas fa-bars"></i>
    </a>
    <SideBar/>
    <!-- sidebar-wrapper  -->
    <main class="page-content">
      <b-container fluid>
        <router-view :key="$route.fullPath"/>
      </b-container>
    </main>
    <!-- page-content" -->
  </div>
</template>

<script>
import SideBar from "@/components/Admin/SideBar";

export default {
  name: 'Admin',
  components: {SideBar},
}
</script>

<style>
#app {
  margin-top: 50px !important;
}
</style>
