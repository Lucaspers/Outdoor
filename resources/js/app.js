require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './views/App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import SingleProduct from './views/SingleProduct.vue'
import Checkout from './views/Checkout.vue'
import Confirmation from './views/Confirmation.vue'
import UserBoard from './views/UserBoard.vue'
import Admin from './views/Admin.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { title: 'Outdoor Login' }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { title: 'Outdoor Register' }
        },
        {
            path: '/products/:id',
            name: 'single-products',
            component: SingleProduct,
            meta: { title: 'Outdoor Product' }
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: Confirmation,
            meta: { title: 'Outdoor Confirmation' }
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
            meta: { title: 'Outdoor Checkout' },
            props: (route) => ({ pid: route.query.pid })
        },
        {
            path: '/dashboard',
            name: 'userboard',
            component: UserBoard,
            meta: {
                requiresAuth: true,
                is_user: true,
                title: 'Outdoor UserBoard'
            }
        },
        {
            path: '/admin/:page',
            name: 'admin-pages',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true,
                title: 'Outdoor AdminPage'
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                requiresAuth: true,
                is_admin: true,
                title: 'Outdoor Admin'
            }
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('Outdoor.jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('Outdoor.user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                }
                else {
                    next({ name: 'userboard' })
                }
            }
            else if (to.matched.some(record => record.meta.is_user)) {
                if (user.is_admin == 0) {
                    next()
                }
                else {
                    next({ name: 'admin' })
                }
            }
            next()
        }
    } else {
        next()
    }
})

const DEFAULT_TITLE = 'Outdoor';
router.afterEach((to, from) => {
  
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});