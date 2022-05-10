import Vue from 'vue'
import App from './Admin.vue'
import router from "./router";
import store from "../../store";
import VueI18n from 'vue-i18n'
import {messages} from "@/local";
import {get_language} from "@/services/utils";

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.css'


import {BootstrapVue, IconsPlugin} from "bootstrap-vue";

Vue.config.productionTip = true

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.use(VueI18n)


const i18n = new VueI18n({
    locale: get_language(), // set locale
    fallbackLocale: 'en',
    messages, // set locale messages
})

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
