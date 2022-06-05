let Koa = require('koa');
let KoaRouter = require('koa-router');
let bodyParser = require('koa-bodyparser')
let {get} = require('./utils/request');

// 存储的用户图书id
let bookCollections = [27033213, 26694486, 19487522 ]
// 缓存openID
let openID = '';


// 生成应用实例
let app = new Koa();
// 生成路由器
let router = new KoaRouter();

// 注册路由 ---  测试
router.get('/', async (ctx, next) => {
  // ctx 路由实例对象
  // console.log(ctx);
  
  // 返回数据ctx.body = value;
  ctx.body = '返回的数据'
})

// 注册路由
// 搜索图书路由
router.get('/searchBook', async (ctx, next) => {
  let searchName = ctx.query.searchName;
  let url = 'https://api.douban.com/v2/book/search?q=' + searchName;
  let response = await get(url);
  ctx.body = response;
})


// 返回用户唯一凭证
// 开发者的密钥，密钥动态生成
const appKey = '4a9ed63ce3ff7701485a2ccb27dd1ba1';
// 开发者的appId
const appId = 'wx0db5ac6ea2aca4fe';
// 处理返回用户openID
router.get('/getOpenId', async (ctx, next) => {
  let code = ctx.query.code;
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appKey}&js_code=${code}&grant_type=authorization_code`
  let result = await get(url);
  let openIdObj = result.data
  openID = JSON.parse(openIdObj).openid
  ctx.body = openIdObj
})



router.get('/scanCode', async (ctx, next) => {
   let {scanCode} = ctx.query;
   let url = 'https://api.douban.com/v2/book/isbn/' + scanCode
   let result = await get(url)
   ctx.body = result;
})



router.get('/getCollections', async (ctx, next) => {
  let openID = ctx.request.query.openID;
  let bookCollectionsInfo = [];
  if(openID === openID){
    for (var i = 0; i < bookCollections.length; i++) {
      let item = bookCollections[i];
      let result = await get(`https://api.douban.com/v2/book/${item}`)
      bookCollectionsInfo.push(result.data);
    }
    ctx.body = bookCollectionsInfo;
  }else {
    ctx.body = false;
  }
  
})

router.post('/collectionBook', async (ctx, next) => {
  // 使用原生的
  // let str = ''
  
  // 定义获取请求参数的异步方法
  // function getParams() {
  //   return new Promise((resolve, reject) => {
  //     ctx.req.on('data', (data) => {
  //       str += data
  //     })
  //
  //     ctx.req.on('end', () => {
  //       str = JSON.parse(str)
  //       // 模拟后台判断是否有该用户
  //       if(str.user === openId){
  //         // 用户点击收藏的书籍之前是否收藏
  //         console.log(bookCollections, str.bookId);
  //         if(bookCollections.indexOf(str.bookId*1) === -1){
  //           bookCollections.push(str.bookId*1)
  //         }
  //
  //         resolve(bookCollections)
  //       }
  //     })
  //   })
  // }
  // 使用插件koa-bodyparser获取请求参数
  console.log(ctx.request.body);
  let {openId, bookId} = ctx.request.body;
  console.log(openId,'mmm', typeof bookId, 'xxx');
  // 验证匹配用户
  if(openId === openID){
    if(bookCollections.indexOf(bookId*1) === -1){
      bookCollections.push(bookId*1);
      console.log(bookCollections);
    }
  }
  ctx.body = true;
})


// 声明使用路由器及允许使用路由方法
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('4000', () => {
  console.log('服务器开启成功');
})
