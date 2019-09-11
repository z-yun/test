/**
  * domain域主表模块接口列表
  */

//  import base from './base'; // 导入接口域名列表
import axios from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const domain = {
  //登录接口
  login: params => { 
	  return axios.post('/authorization/login/login',qs.stringify(params));
  },  

}

export default domain;