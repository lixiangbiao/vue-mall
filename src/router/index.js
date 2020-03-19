import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '首页',
            redirect: '/home',
            meta: {
                title: '首页'
            }
        },
        {
            path: '/home',
            name: '首页',
            component: () => import('../views/home/home.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/shop',
            name: '商城',
            component: () => import('../views/shop/shop.vue'),
            meta: {
                title: '商城'
            }
        },
        {
            path: '/cart',
            name: '购物车',
            component: () => import('../views/cart/cart.vue'),
            meta: {
                title: '购物车'
            }
        },
        // {
        //     path: '/goodsdetail', //this.$router.push({path:'/goodsdetail',query:{id:id}})
        //     name: '购物车',
        //     component: () => import('../views/cart/goodsdetail.vue'),
        //     meta: {
        //         title: '购物车'
        //     }
        // }, 
        {
            path: '/goodsdetail:id',
            name: '详情',
            component: () => import('../views/cart/goodsdetail.vue'),
            meta: {
                title: '详情'
            }
        }, 
        {
            path: '/mine',
            name: '我的',
            component: () => import('../views/mine/mine.vue'),
            meta: {
                title: '我的'
            }
        }, {
            path: '/info',
            name: '我的信息',
            component: () => import('../views/mine/info.vue'),
            meta: {
                title: '我的信息'
            }
        }, {
            path: '/order',
            name: '我的订单',
            component: () => import('../views/mine/order.vue'),
            meta: {
                title: '我的订单'
            }
        },{
            path: '/address',
            name: '我的地址',
            component: () => import('../views/mine/address.vue'),
            meta: {
                title: '我的地址'
            }
        }, {
            path: '/addressadd',
            name: '新增地址',
            component: () => import('../views/mine/addressadd.vue'),
            meta: {
                title: '新增地址'
            }
        }
    ]
})
//全局注册函数，所有的导航调整都经过这里，
//to: Route: 即将要进入的目标 路由对象
//from: Route: 当前导航正要离开的路由
//next(): 进行管道中的下一个钩子。/next({ path: '/about' })：跳转到新的导航。next(false):中断当前的导航，重置到from来的导航。next(error)

// 需求跳转到具体页面时，不显示底部导航栏
router.beforeEach((to, from, next) => {
    switch (to.path) {
        case '/home':
            store.state.headfoot.footShow = true;
            store.state.headfoot.headerIndex = 0;
            break;
        case '/shop':
            store.state.headfoot.footShow = true;
            store.state.headfoot.headerIndex = 0;
            break;
        case '/cart':
            store.state.headfoot.footShow = true;
            store.state.headfoot.headerIndex = 0;
            break;
        case '/mine':
            store.state.headfoot.footShow = true;
            store.state.headfoot.headerIndex = 0;
            break;
        default:
            store.state.headfoot.footShow = false;
            store.state.headfoot.headerIndex = 1;
    }
    next()
})
export default router