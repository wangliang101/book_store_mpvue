<template>
  <div id="booksContainer">
    <swiper indicator-dots="true" indicator-color="pink" indicator-active-color="#02a774">
      <swiper-item v-for="(item, key) in carousel" :key="index" @click="toDetail(item)">
        <img :src="item.image" alt="" >
      </swiper-item>
    </swiper>
    <div id="AllBooks">
      <div class="nav">
        <span class="all">全部商品</span>
        <span class="more" @click="toBookList">&gt;</span>
      </div>
      <ul class="booksList">
        <li class="bookItem" v-for="(item, index) in booksList" :key="index" @click="toDetail(item)">
          <img :src="item.image" alt="">
          <p class="bookName">
            《{{item.title}}》
          </p>
          <p class="bookDir">
            {{item.author}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import datas from './datas/data.json'
  export default {
    data(){
      return {
        booksList: []
      }
    },
    mounted(){
      this.booksList = datas
    },
    computed: {
      carousel(){
        // 注意splice会修改原数组
        return [...this.booksList].splice(0, 4)
      }
    },
    methods: {
      toBookList(){
        wx.navigateTo({
          url: '/pages/bookList/main?booksList=' + JSON.stringify(this.booksList)
        })
      },
      toDetail(item){
        wx.navigateTo({
          url: '/pages/detail/main?bookItem=' + JSON.stringify(item)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksContainer
    swiper
      width 100%
      height 400rpx
      img
        height 100%
        width 100%
    #AllBooks
      .nav
        padding 10rpx
      .more
        float right
        width 80rpx
        height 100%
        text-align right
        color #02a774
      .booksList
        display flex
        flex-wrap wrap
        .bookItem
          width 50%
          box-sizing border-box
          border-bottom 1rpx solid #eee
          text-align center
          padding 20rpx
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
            border-left 1rpx solid #eee
          img
            width 200rpx
            height 200rpx
          .bookName
            font-size 30rpx
            line-height 60rpx
          .bookDir
            font-size 28rpx


</style>