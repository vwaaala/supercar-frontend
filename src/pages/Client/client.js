import Vue from 'vue'
import App from '@/pages/Client/Client.vue'
import router from "@/router";
import store from "@/store";
import BootstrapVue from "bootstrap-vue";
import jQuery from 'jquery'
import VueI18n from 'vue-i18n'
import {messages} from "@/local";
import {get_language} from "@/services/utils";

Vue.config.productionTip = true


Vue.use(BootstrapVue)
Vue.prototype.jQuery = jQuery
Vue.use(VueI18n)
//
// import VueSplide from '@splidejs/splide';
// Vue.use( VueSplide );


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
