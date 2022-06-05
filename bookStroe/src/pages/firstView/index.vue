<template>
  <div id="indexContainer">
    <swiper @change="handleChange"  :indicator-dots="isShow" indicator-color="pink" indicator-active-color="#02a774">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button @click="toBooks" v-show="!isShow">开始体验</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 0,
        isShow: true
      }
    },
    methods: {
      handleChange(event){
        console.log(event);
        if(event.mp.detail.current === 3){
          this.isShow = false
        }else {
          this.isShow = true
        }
      },
      toBooks(){
        console.log('xxx');
        wx.switchTab({
          url: '/pages/personal/main'
        })
      }
    }
  }
</script>

<style lang="stylus">
  #indexContainer
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    button
      position fixed
      bottom 30rpx
      left 50%
      margin-left -100rpx
      width 200rpx
      height 80rpx
      line-height 80rpx
      background rgba(255, 255, 255,.7)
</style>