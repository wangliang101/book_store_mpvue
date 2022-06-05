import Vue from 'vue'
import FirstView from './index.vue'

// 生成实例
const firstView = new Vue(FirstView)

// 挂载当前实例对象
firstView.$mount() // 作用等同于原生小程序的Page()