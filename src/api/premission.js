import router from '@/router/index'
import store from '@/store/index'
import { userRoutes } from '@/api/userRoutes'

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('userInfo')
  }
  let user = JSON.parse(sessionStorage.getItem('userInfo'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});

// // 拦截路由
// router.beforeEach((to, from, next) => {
//   debugger;
//   const userInfo = store.state.premission.userInfo
//   // 判断是否有token
//   if (userInfo.token) {
//     debugger;
//     // 验证token
//     if (checkToken(userInfo.token)) {
//       debugger;
//       next()
//     } else {
//       debugger;
//       // 跳转登录
//       to.path === '/login' ? next() : next('/login')
//     }
//   } else {
//     debugger;
//     // 判断localStorage是否有用户信息
//     let userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : ''
//     if (userInfo) {
//       debugger;
//       const {token, username, menu} = userInfo
//       // 验证tokezn
//       if (checkToken(token)) {
//         debugger;
//         // 设置vuex
//         store.dispatch('setUserInfo', {token, username, menu})
//         // 设置路由
//         userRoutes(menu).then(res => {
//           next(to.path)
//         }).catch(err => {
//           console.log(err)
//           to.path === '/login' ? next() : next('/login')
//         })
//       } else {
//         // 跳转登录
//         to.path === '/login' ? next() : next('/login')
//       }
//     } else {
//       // 跳转登录
//       to.path === '/login' ? next() : next('/login')
//     }
//   }
// })

// // 验证token
// let checkToken = (token) => {
//   return true
// }