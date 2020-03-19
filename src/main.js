import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index'
import VueWechatTitle from 'vue-wechat-title'
// import mandMobile from 'mand-mobile'
// import 'mand-mobile/lib/mand-mobile.css'
import './normalize.css'
import './style.css'
//Vue.use(mandMobile)
import { Lazyload } from 'vant';
Vue.use(VueWechatTitle)
Vue.use(Lazyload, {
    preLoad: 1.3,
    //error: 'static/img/error.jpg',
    //loading: 'static/img/loading.gif',
    attempt: 3
})
Vue.use(Vant);
Vue.config.productionTip = false

Vue.mixin({ 
    created(){ 
        var myOption = this.$data.show; 
        if(myOption){
            console.log('全局混入') 
        }else{ 
            console.log('没进入全局混入')
        } 
    } 
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
