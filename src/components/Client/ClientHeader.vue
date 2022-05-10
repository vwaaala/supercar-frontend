<template>
  <header>
    <div class="container">
      <div class="row">
        <div id="header" style="width: 100%">
          <div class="header-container" style="padding: 5px 0 5px 0;">
            <div class="header-logo">
              <a class="logo" href="/" title="Car HTML">
                <div><img alt="Car Store" class="header-logo" src="/images/logo.png" style="width: 280px"></div>
              </a>
            </div>

            <div class="header__nav">

              <div class="fl-header-right" style="z-index: 999">
                <div class="fl-links">
                  <div class="no-js">
                    <a class="clicker" title=""></a>
                    <div class="fl-nav-links">
                      <div class="language-currency">
                        <div class="fl-language">
                          <h3>Language</h3>
                          <ul class="lang">
                            <li>
                              <a href="" @click.prevent="change_language('en')"> <img alt="English"
                                                                                      src="/images/english.png">
                                <span>English</span> </a>
                            </li>
                            <li>
                              <a href="" @click.prevent="change_language('pl')"> <img alt="Polish"
                                                                                      src="/images/polish.png">
                                <span>Polish</span> </a>
                            </li>
                          </ul>
                        </div>
                        <!--fl-language-->
                        <!-- END For version 1,2,3,4,6 -->
                        <!-- For version 1,2,3,4,6 -->
                        <div class="fl-currency">
                          <h3>Currency</h3>
                          <ul class="currencies_list">
                            <li>
                              <a href="#" title="EUR"> <strong>zł</strong> złoty</a>
                            </li>
                            <li>
                              <a href="#" title="USD"> <strong>$</strong> US Dollar</a>
                            </li>
                          </ul>
                        </div>
                        <!--fl-currency-->
                        <!-- END For version 1,2,3,4,6 -->
                      </div>
                      <h3 v-t="'menu.my_account'"></h3>
                      <ul class="links">
                        <li v-if="!is_logged"><a href="/login" v-t="'menu.login'"></a></li>
                        <li v-if="!is_logged"><a href="/register" v-t="'menu.register'"></a></li>
                        <li v-if="is_logged"><a href="/wishlist" v-t="'menu.wishlist'"></a></li>
                        <li v-if="is_logged"><a href="#" v-t="'menu.logout'" @click="logout()"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--mini-cart-->
                <SearchMenuBar/>
                <!--links-->
              </div>

              <div class="fl-nav-menu">
                <nav>
                  <div class="mm-toggle-wrap">
                    <div class="mm-toggle"><i class="fa fa-bars"></i><span class="mm-label">Menu</span></div>
                  </div>
                  <div class="nav-inner">
                    <!-- BEGIN NAV -->
                    <NavBarMenuItems id="nav" class="hidden-xs"/>
                    <!--nav-->
                  </div>
                </nav>
              </div>
            </div>
            <!--row-->
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu-->
    <div id="mobile-menu" style="position: fixed">
      <nav-bar-menu-items/>
    </div>
  </header>
</template>

<script>
import {set_language} from "@/services/utils";
import SearchMenuBar from "@/components/Client/SearchMenuBar";
import NavBarMenuItems from "@/components/Client/NavBarMenuItems";
import * as auth_service from "@/services/auth";
import {getAccessToken} from "@/services/auth";

export default {
  name: "ClientHeader",
  components: {NavBarMenuItems, SearchMenuBar},
  methods: {
    logout() {
      auth_service.logout()
    },
    change_language: function (lang) {
      set_language(lang)
      this.$root.$i18n.locale = lang
    }
  },
  computed: {
    is_logged: function () {
      try {
        if (getAccessToken()) {
          return true
        }
      } catch (e) {
        return false
      }

      return false
    }
  }
}
</script>


<style>

.header__nav {
  margin-left: 0;
}

@media (max-width: 1000px) {
  .header__nav {
    margin-left: 80px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .fl-header-right {
    top: 0;
  }
}

@media (max-width: 768px) {
  .header__nav {
    margin-left: 0;
  }
}
</style>

