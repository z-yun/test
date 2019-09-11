<template>
	<div>
		主页
		<el-button
		  type="primary"
		  style="width:10%;"
		  @click="handleDel"
		>删除</el-button>
		<el-button
		  type="primary"
		  style="width:10%;"
		  @click="handleAdd"
		>添加</el-button>
		<el-upload
		  class="upload-demo"
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
	</div>
</template>

<script>
export default {
	name: 'home',
	methods:{
		handleDel(){
			var _this = this;
			this.$confirm('确认删除吗?', '提示', {
			}).then(() => {
				_this.$router.push('/chart');
			}).catch(() => {
			
			});
		},
		handleAdd(){
			const loading = this.$loading({
				lock: true,
				text: '文件上传中请稍等...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.1)'
			});
			setTimeout(()=>{
				loading.close();
			},2000)
		}
	}
}
</script>

<style>
</style>
