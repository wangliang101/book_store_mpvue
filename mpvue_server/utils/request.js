let Fly = require('flyio/src/node');

let fly = new Fly;

// 暴露请求的方法
exports.get = function (url) {
  return new Promise((resolve, reject) => {
    fly.get(url)
      .then((response) => {
        console.log('请求成功');
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
}