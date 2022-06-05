<template>
  <div id="scan">
    <button @click="handleScan">扫码查看图书</button>
  </div>
</template>

<script>
  import request from '../../utils/request'
  export default {
    methods: {
      handleScan(){
        wx.scanCode({
          async success(res){
            let scanCode = res.result;
            let result = await request('/scanCode', {scanCode});
            wx.navigateTo({
              url: '/pages/detail/main?bookItem=' + JSON.stringify(result.data)
            })
          },
          fail(){
            console.log('扫码失败。。。');
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>