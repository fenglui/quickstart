<template>
	<block>
		<uni-list>
			<view class="login">
				<navigator url="../login/login"><uni-list-item title="点击登录" note="欢迎来到货币交易平台"></uni-list-item></navigator>
			</view>
		</uni-list>
		<view class="recharge">
			<view class="item"><uni-icon size="32" type="undo"></uni-icon><text class="uni-h5" style="display: block;">充币</text></view>
			<view class="item" @click="linkTo()"><uni-icon size="32" type="redo"></uni-icon><text class="uni-h5" style="display: block;">提币</text></view>
		</view>
		<uni-list>
			<view class="setting">
				<uni-list-item title="订单管理" v-on:click="navTo('/pages/ucenter/order/main')" show-extra-icon="true" :extra-icon="{size: '20',type: 'compose'}"></uni-list-item>
				<uni-list-item title="安全中心" show-extra-icon="true" :extra-icon="{size: '20',type: 'locked'}"></uni-list-item>
				<uni-list-item title="关于我们" show-extra-icon="true" :extra-icon="{size: '20',type: 'info-filled'}"></uni-list-item>
				<uni-list-item title="联系客服" show-extra-icon="true" :extra-icon="{size: '20',type: 'contact'}"></uni-list-item>
				<uni-list-item title="设置" v-on:click="navTo('/pages/ucenter/setting/main')" show-extra-icon="true" :extra-icon="{size: '20',type: 'gear'}"></uni-list-item>
			</view>
		</uni-list>
	</block>
</template>

<script>
	import {
		uniList ,
		uniListItem,
		uniIcon
	} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcon
		},
		data() {
			return {
			};
		},
		props:{
			
		},
		computed: {
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang='scss'>
	.login{
		background: #f7f6fb;
	}
	.login .uni-list-item__container{
		padding-top: 40upx;
		padding-bottom: 40upx;
	}
	.login .uni-list-item__container .uni-list-item__content-title{
		font-size: $font-xl !important;
	}
	.login .uni-list-item__container .uni-list-item__content-note{
		font-size: $font-base !important;
	}
	.setting .uni-list-item__container{
		padding: 30upx 20upx;
	}
	.setting .uni-list-item__container .uni-list-item__content-title{
		font-size: $font-base !important;
	}
	.recharge{
		height: 150upx;
		line-height: 150upx;
		display: flex;
	}
	.recharge .item{
		width: 50%;
		text-align: center;
		padding-top: 20upx;
	}
</style>
