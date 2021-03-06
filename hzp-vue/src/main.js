import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios" 
import  Vuex from "vuex"
import Top from "./components/Top"
import Toph from "./components/Toph"
import Tail from "./components/Tail"
import Bottom from "./components/Bottom"
import Fixed from "./components/Fixed"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {get , post} from './common.js'

//保证所有vue都可以使用axios
Vue.prototype.axios=axios
//项目中请求服务器路径配置
axios.defaults.baseURL="/api"
//保证session对象不丢失
axios.defaults.withCredentials=true

//注册vuex
Vue.use(Vuex)
Vue.component("top",Top);
Vue.component("toph",Toph);
Vue.component("tail",Tail);
Vue.component("bottom",Bottom);
Vue.component("fixed",Fixed)
Vue.use(ElementUI)

Vue.prototype.$get = get;
Vue.prototype.$post = post;


Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
