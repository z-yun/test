/**
  * user模块接口列表
  */

//  import base from './base'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = {
 //登录
 login(params) {
	return "success";
    //return API.POST('/api/users/login', params)
    //return axios.post('/api/users/login',qs.stringify(params));
  },
  //登出
  logout(params) {
    return "success";
    //return API.GET('/api/users/logout', params)
  },
  // 创意列表
  // getPlanListDetail (params) {
  //     return axios.post('/inv-innovatemanager/plan/planList',qs.stringify(params));
  // },

}

export default user;
