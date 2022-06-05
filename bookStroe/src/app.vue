<script>
  import request from './utils/request'
  export default {
    mounted () {
      wx.login({
        success: async (res) => {
          console.log(res); // {errMsg: "login:ok", code: "011a7JmS1cFy541rmymS1KCQmS1a7Jm4"}
          let code = res.code // 用户登录的凭证，通过凭证可以获取用户的openId
          let result = await request('/getOpenId?code=' + code)

          // 缓存用户openID
          wx.setStorage({
            key: 'openID',
            data: result.openid
          })
        }
      })
    }
  }
</script>

<style lang="stylus">
  page
    height 100%
    width 100%
</style>