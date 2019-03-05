import Vue from 'vue'
import Vuex from 'vuex'
import headfoot from './headfoot/index'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        index:0
    },
    modules:{
        headfoot
    },
    mutations: {

    },
    actions: {

    }
})

export default store