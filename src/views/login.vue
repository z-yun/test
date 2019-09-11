<template>
	<div>
		 <el-form
		  ref="AccountForm"
		  :model="account"
		  :rules="rules"
		  label-position="left"
		  label-width="0px"
		  class="demo-ruleForm login-container"
			style="width:30%;"
		>
		  <h3 class="title">欢迎登录</h3>
		  <el-form-item prop="username">
		    <el-input type="text" v-model="account.username" auto-complete="off" placeholder="请输入用户名"></el-input>
		  </el-form-item>
		  <el-form-item prop="pwd">
		    <el-input
		      type="password"
		      v-model="account.pwd"
		      :autofocus="pwdFocus"
		      auto-complete="new-password"
		      placeholder="请输入登录密码"
		    ></el-input>
		  </el-form-item>
		  <el-form-item style="width:100%;">
		    <el-button
		      type="primary"
		      style="width:100%;"
		      @click.native.prevent="handleLogin"
		      :disabled="allowLogin"
		      :loading="loading"
		    >登录</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
import {Decrypt,Encrypt} from '@/api/untils'
export default{
	data(){
		var validateAccount = (rules, value, callback) => {
		  if (value === "") {
		    callback(new Error("请输入账号"));
		  } else {
		    if (this.account.username !== "") {
		      this.account.username = value;
		      this.validateCorrect();
		    }
		    callback();
		  }
		};
		var validatePwd = (rules, value, callback) => {
		  if (value === "") {
		    callback(new Error("请输入密码"));
		  } else {
		    if (this.account.pwd !== "") {
		      this.account.pwd = value;
		      this.validateCorrect();
		    }
		    callback();
		  }
		};
		return {
			loading:false,
			account: {
			  username: "",
			  pwd: ""
			},
			rules: {
			  username: [
			    { required: true, validator: validateAccount, trigger: "change" }
			  ],
			  pwd: [{ required: true, validator: validatePwd, trigger: "change" }]
			},
			pwdFocus: false,
			allowLogin: true,
		}
	},
	created() {
		let reg_user = JSON.parse(window.sessionStorage.getItem("register-user"));
		if (reg_user) {
		  this.account.username = reg_user.username;
		  this.account.pwd = "";
		  this.pwdFocus = true;
		}
	},
	methods:{
		handleLogin(){
			//如果密码是AES-开头的
			var str = '';
			if(this.account.pwd.indexOf("AES-") == 0){
				str = this.account.pwd;	
			}else{
				str = "AES-"+Encrypt(this.account.pwd);
			}
			let para = {
				username: this.account.username,
				password: str,
				mdcKey: "biztechnology",//中台的简称
			};
			this.listLoading = true;
			this.$api.domain.login(para).then((res) => {
				if(res && res.data.code=="0000"){
					let str = res.data.map.userObj;
					let result = {
					  id: str.ptId,
					  nickname: str.ptAlias,
					  name: str.ptName,
					  email: str.ptEmail
					};
				
					let token = res.data.map.token;
				
					if(res.data.map.resourcesListTempRst.length == 0 ||  res.data.map.systemDefineNavi.length == 0){
						this.$message.error("登录失败，无可用资源");
						this.listLoading = false;
					}
				
					sessionStorage.setItem('userInfo', JSON.stringify(result));
					sessionStorage.setItem('token', token);
					sessionStorage.setItem('resourcesList', JSON.stringify(res.data.map.resourcesListTempRst));//资源
					sessionStorage.setItem('sys', JSON.stringify(res.data.map.systemDefineNavi));//系统
					// 将用户token保存到vuex中
					console.log(sessionStorage);
					// this.$router.push({path: '/'+res.data.map.systemDefineNavi[0].sysKey});
					this.$router.push({path: '/home'});
				}else if(res.data.code=="0007"){
				  this.$message.error(res.data.msg);
				}else {
				  this.$message.error("登录失败，账号或密码错误");
				}
				this.listLoading = false;
			})
		},
		validateCorrect() {
		  if (
		    this.account.pwd.trim().length > 0 &&
		    this.account.username.trim().length > 0
		  ) {
		    this.allowLogin = false;
		  } else {
		    this.allowLogin = true;
		  }
		}
	}
}
</script>

<style lang="scss">
.login-container{
	margin: 180px auto;
	padding: 35px 35px 15px 35px;
	border: 1px solid #ccc;
}
</style>
