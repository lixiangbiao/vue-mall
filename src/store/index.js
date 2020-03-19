import Vue from 'vue'
import Vuex from 'vuex'
import headfoot from './headfoot/index'
//id
//img
//title
//price
//weight
//paynumber
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        index:0,
        cart:[],
        cartobj:{},
    },
    modules:{
        headfoot
    },
    mutations: {
        addcart(state,params){
            //state.cart.push(params)  
            params.checked = false;
            let flag = true;
            state.cart.forEach((item)=>{
                if(params.id === item.id){
                    flag = false;
                }
            })
            if(flag){
                state.cart.push(params)
                state.cartobj[params.id] =1;
            }else{
                state.cartobj[params.id] = state.cartobj[params.id]+1;
            }
        },
        cartnumber(state,params){
            state.cartobj[params.id] = params.value
            state.cart = state.cart.slice(0)
        }
    },
    actions: {

    }
})

export default store