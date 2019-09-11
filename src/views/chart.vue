<template>
	<div>
		<ve-histogram :data="chartData" :extend="extend"></ve-histogram>
		<ve-ring :data="chartData2"></ve-ring>
	</div>
</template>

<script>
export default {
    data () {
	  this.chartSettings = {
		// yAxisType : ['percent'],
		// yAxisName: ['单位：%']
		radius: [10,100],
	  }
	  this.extend = {
		series: {
		  label: { show: true, position: "top" }
		}
	  }
	  return {
		chartData: {
		  columns: ['年龄', '年龄结构分布占比'],
		  rows: [
			{ '年龄': '20岁以下', '年龄结构分布占比': 0.15},
			{ '年龄': '21~25岁', '年龄结构分布占比': 0.5},
			{ '年龄': '26~30岁', '年龄结构分布占比': 0.22},
			{ '年龄': '31~35岁', '年龄结构分布占比': 0.8},
			{ '年龄': '36~40岁', '年龄结构分布占比': 0.10},
			{ '年龄': '41~45岁', '年龄结构分布占比': 0.10},
			{ '年龄': '46~50岁', '年龄结构分布占比': 0.10},
			{ '年龄': '51~60岁', '年龄结构分布占比': 0.10}
		  ]
		},
		chartData2: {
			columns: ['分类', '数量'],
			rows: [
				{ '分类': '单选题', '数量': 1393 },
				{ '分类': '多选题', '数量': 3530 },
			]
		}
	  }
	}
}	
</script>

<style>
</style>
