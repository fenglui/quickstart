<template>
	<view class="uni-swiper-msg notice">
		<view class="uni-swiper-msg-icon">
			<image src="../../static/icon/notice.png" mode="widthFix"></image>
		</view>
		
		<swiper vertical="true" autoplay="true" circular="true" interval="3000">
			<swiper-item v-for="(item, index) in list_" :key="index" @click="onClick()">
				<navigator>{{item}}</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			list: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		computed: {
			list_(){
				return this.list;
			}
		},
		methods: {
			onClick(e) {
				console.log("=====================================")
			}
		}
	}
</script>

<style scoped>
	.notice{
		margin: 0rpx 10px;
	}
</style>
