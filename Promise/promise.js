// var promise = new Promise(function(resolve, reject) {
//   // ... some code

//   if (/* 异步操作成功 */){
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

// promise.then(function(value) {
//   // success
// }, function(error) {
//   // failure
// });



// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(reject, ms, 'done');

//延时执行 处理
// var timeout = ms => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(reject,ms,'done');
//     })
// }

// timeout(5000).then( value => {
//   console.log(value);
// }, value =>{
//   console.log('value');
// });

//立即执行函数
let promise = new Promise((resolve,reject) => {
    resolve();
})

promise.then(resolve => {
    console.log('这里是成功');
}, reject => {
    console.log('这里是为成功状态');
})