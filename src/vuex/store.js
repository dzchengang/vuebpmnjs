import Vue from 'vue'
import Vuex from 'vuex'
import user from './data/user.js'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        persistedState({ storage: window.sessionStorage })
    ],
    modules: {
        user
    }
})
