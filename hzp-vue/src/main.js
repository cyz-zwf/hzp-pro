import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios" 
import  Vuex from "vuex"
import Top from "./components/Top"

//保证所有vue都可以使用axios
Vue.prototype.axios=axios
//项目中请求服务器路径配置
axios.defaults.baseURL="http:127.0.0.1:5050"
//保证session对象不丢失
axios.defaults.withCredentials=true
//注册vuex
Vue.use(Vuex)
Vue.component("top",Top);

Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
