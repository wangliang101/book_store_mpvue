import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false // 关闭生成环境的提示


// 声明当前组件App为整个应用
App.mpType = 'app'

// 生成App的实例
const app = new Vue(App)

// 挂载App应用
app.$mount() // 作用等同于原生小程序中的App()

