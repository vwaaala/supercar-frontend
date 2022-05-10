import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        limit: 12,
        page_no: 1,
        total_pages: 1,
        sort: 'updated'
    },
    mutations: {
        async authenticate(state) {
            console.log('Authenticating....', state)
        },
    },
    actions: {},
    modules: {}
})
