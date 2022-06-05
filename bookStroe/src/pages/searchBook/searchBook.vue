<template>
  <div id="searchContainer">
    <div class="head">
      <input confirm-type="search" @confirm="confirm" v-model="searchContent" class="searchInput" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span @click='searchContent = ""' v-show="isShow" class="clean">X</span>
    </div>

    <div class="bookListContainer" v-if="booksList.length">
      <p class="title">搜索到的图书共20本</p>
      <BookList :booksList="booksList"/>
    </div>
  </div>
</template>

<script>
  import request from '../../utils/request'
  import config from '../../utils/config'

  import BookList from '../bookList/bookList.vue'
  export default {
    components: {
      BookList
    },
    data(){
      return {
        searchContent: '',
        isShow: false, // 标识清除内容按钮是否显示
        booksList: []
      }
    },
    watch: {
      searchContent(){
        this.isShow = this.searchContent.length?true : false
      }
    },
    methods: {
      async confirm(){
        console.log('确认搜索');
        // 发送请求获取图书列表，携带参数
        let url = '/searchBook?searchName=' + this.searchContent
        let result = await request(url)
        console.log(result);
        this.booksList = result.data.books
        console.log(this.booksList);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .head
      position relative
      width 80%
      height 80rpx
      border-bottom 1rpx solid #02a774
      margin 0 auto
      .searchInput
        height 100%
      .placeholder
          color #02a774
          font-size 28rpx
          text-align center
      .clean
        position absolute
        right 20rpx
        top 20rpx
        z-index 99


    .bookListContainer
      &>p
        font-size 30rpx
        color #333
        padding 20rpx
        border 1rpx solid #eee
</style>