<template>

  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <a href="/">Supercar.pl</a>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-responsive img-rounded"
               src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
               alt="User picture">
        </div>
        <div class="user-info">
          <span class="user-name">
            {{ login_data.name }}
          </span>
          <span class="user-role">{{ login_data.type.toUpperCase() }}</span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
      <!-- sidebar-header  -->
      <div class="sidebar-search">
        <div>
          <div class="input-group">
            <input type="text" class="form-control search-menu" placeholder="Search...">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar-search  -->
      <div class="sidebar-menu">

        <ul v-if="is_admin">
          <li class="header-menu">
            <span>General</span>
          </li>
          <li>
            <router-link :to="'/'">
              <i class="fa fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
        </ul>

        <ul>
          <li class="header-menu">
            <span>Create Item</span>
          </li>
          <li>
            <router-link to="/cars/add">
              <i class="fa fa-car"></i>
              <span>Add Car</span>
            </router-link>
          </li>
          <li>
            <router-link to="/trucks/add">
              <i class="fa fa-truck"></i>
              <span>Add Truck</span>
            </router-link>
          </li>
          <!--          <li>-->
          <!--            <router-link to="/vans/add">-->
          <!--              <i class="fa fa-truck"></i>-->
          <!--              <span>Add Delivery Van</span>-->
          <!--            </router-link>-->
          <!--          </li>-->
          <li>
            <router-link to="/machinery/add">
              <i class="fa fa-cog"></i>
              <span>Add Machinery</span>
            </router-link>
          </li>


          <li class="header-menu">
            <span>Listings</span>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-car"></i>
              <span>Passenger Cars</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link to="/cars">Manage</router-link>
                </li>
                <li>
                  <router-link to="/cars/add">Add new</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-truck"></i>
              <span>Trucks</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link to="/trucks">Manage</router-link>
                </li>
                <li>
                  <router-link to="/trucks/add">Add new</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-cogs"></i>
              <span>Machineries</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link to="/machinery">Manage</router-link>
                </li>
                <li>
                  <router-link to="/machinery/add">Add new</router-link>
                </li>
              </ul>
            </div>
          </li>
          <!--          <li class="sidebar-dropdown">-->
          <!--            <a href="#">-->
          <!--              <i class="fa fa-truck"></i>-->
          <!--              <span>Delivery Van</span>-->
          <!--            </a>-->
          <!--            <div class="sidebar-submenu">-->
          <!--              <ul>-->
          <!--                <li>-->
          <!--                  <router-link to="/cars">Manage</router-link>-->
          <!--                </li>-->
          <!--                <li>-->
          <!--                  <router-link to="/cars/add">Add new</router-link>-->
          <!--                </li>-->
          <!--              </ul>-->
          <!--            </div>-->
          <!--          </li>-->


        </ul>
        <ul v-if="is_admin">
          <li class="header-menu">
            <span>Master Data</span>
          </li>

          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span>Data</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <router-link to="/master-data-group">Category</router-link>
                </li>
                <li>
                  <router-link to="/master-data-sub-group">Sub-Category</router-link>
                </li>
                <li>
                  <router-link to="/master-data-brand">Brand</router-link>
                </li>
                <li>
                  <router-link to="/master-data-model">Model</router-link>
                </li>
                <li>
                  <router-link to="/master-data-tech-state">Technical Condition</router-link>
                </li>
              </ul>
            </div>
          </li>

        </ul>

        <ul v-if="is_admin">
          <li class="header-menu">
            <span>System Management</span>
          </li>

          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span>Users</span>
            </a>
            <div class="sidebar-submenu">
              <!-- <ul>
                <li>
                  <router-link to="/cars">Manage</router-link>
                </li>
                <li>
                  <router-link to="/cars/add">Add new</router-link>
                </li>
              </ul> -->
            </div>
          </li>

        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
  </nav>
</template>

<script>
import {getLoggedInData} from "@/services/auth";

export default {
  name: "SideBar",
  computed: {
    login_data: function () {
      return getLoggedInData()
    },
    is_admin() {
      return this.login_data.type === 'admin'
    }
  }
}
</script>

<style scoped>

</style>