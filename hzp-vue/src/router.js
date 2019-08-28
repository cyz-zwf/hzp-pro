import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from "./views/Index.vue"
import Detail from "./views/Detail"
import Shopping from "./views/Shopping"
import Login from "./views/Login"
import Reg from "./views/Reg"
import HomePage from "./views/HomePage"
import Classification from './views/Classification'
import Myhome from './views/Myhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    { path: '/Detail', component: Detail },
    { path: '/Shopping', component: Shopping },
    { path: '/Login', component: Login },
    { path: '/Reg', component: Reg },
    { path: '/HomePage', component: HomePage },
    { path: '/classification',component: Classification},
    { path: '/myhome',component:Myhome},
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
