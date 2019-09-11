/**
  * login模块接口列表
  */

//  import base from './base'; // 导入接口域名列表
 import axios from './http'; // 导入http中创建的axios实例
 import qs from 'qs'; // 根据需求是否导入qs模块
 
 const log = {
     // 创意列表
     login (params) {
         return axios.post('/inv-usermanager/user/login',qs.stringify(params));
     },

 }
 
 export default log;