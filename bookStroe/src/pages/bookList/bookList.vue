<template>
  <div>
    <div class="bookItem" v-for="(item, index) in booksList" :key="index" @click="toDetail(item)">
      <img :src="item.image" alt="">
      <div class="bookInfo">
        <span>{{item.title}}</span>
        <span>作者: {{item.author}}</span>
        <span>出版社: {{item.publisher}}</span>
      </div>
      <p class="price">{{item.price}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      booksList: Array
    },
    data() {
      return {
          booksList: []
      }
    },
    mounted(){
      if(this.$mp){
        this.booksList = JSON.parse(this.$mp.query.booksList)
      }
    },
    methods: {
      toDetail(item){
        wx.navigateTo({
          url: '/pages/detail/main?bookItem=' + JSON.stringify(item)
        })
      }
    }
  }
</script>
<style lang="stylus" scoped="">
  .bookItem
    display flex
    padding 10rpx
    border-bottom 1rpx solid #eee
    img
      width 140rpx
      height 140rpx
    .bookInfo
      display flex
      flex-direction column
      max-width 70%
      margin-left 10rpx
      line-height 50rpx
      font-size 28rpx
    .price
      position absolute
      right 30rpx
      color red
      font-size 32rpx
      font-weight bold


</style>