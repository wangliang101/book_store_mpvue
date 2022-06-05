import Vue from 'vue'
import Books from './books.vue'

// 生成实例
const books = new Vue(Books)

// 挂载当前实例对象
books.$mount() // 作用等同于原生小程序的Page()