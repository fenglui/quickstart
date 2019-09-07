<template>
	<view class="container">
		<view class="tab">
			<text @click="switchTab" :class="tabIndex == 0 ? 'active uni-text-gray' : 'uni-text-gray'">全部委托</text>
			<text @click="switchTab" :class="tabIndex == 1 ? 'active uni-text-gray' : 'uni-text-gray'">历史记录</text>
		</view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					
					<view class="list">
						<view class="item uni-divider">
							<view class="title">
								<view class="n uni-h4"><text class="uni-up">买入</text><text class="uni-h5 uni-common-pl">BTC/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
						<view class="item uni-divider">
							<view class="title">
								<view class="n uni-h4"><text class="uni-up">买入</text><text class="uni-h5 uni-common-pl">EOS/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
						<view class="item uni-divider">
							<view class="title">
								<view class="n uni-h4"><text class="uni-down">卖出</text><text class="uni-h5 uni-common-pl">ETH/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
						<view class="item">
							<view class="title">
								<view class="n uni-h4"><text class="uni-down">卖出</text><text class="uni-h5 uni-common-pl">EOS/USDT</text></view>
								<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
							</view>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">时间</view>
									<view class="c uni-text-gray">委托价</view>
									<view class="r uni-text-gray">委托量</view>
								</view>
								<view class="thead">
									<view class="l">11:19 04/14</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
							<block>
								<view class="thead">
									<view class="l uni-text-gray">成交总额</view>
									<view class="c uni-text-gray">成交均价</view>
									<view class="r uni-text-gray">成交量</view>
								</view>
								<view class="thead">
									<view class="l">5211.52</view>
									<view class="c">100.54</view>
									<view class="r">5612165.55</view>
								</view>
							</block>
						</view>
					
					</view>
					
					<uni-load-more :status="loadingType"></uni-load-more>
				</scroll-view>
			</swiper-item>
			
			<swiper-item class="tab-content">
				<scroll-view class="list-scroll-content" scroll-y>
					<empty></empty>
				</scroll-view>
				
			</swiper-item>
		</swiper>
		
	</view>
</template>
<script>
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue';
	export default {
		data() {
			return {
				tabIndex: 0,
				loadingType: "more"
			}
		},
		components: {
			uniLoadMore
		},
		onReady() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#0952c3',
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
		},
		computed: {

		},
		methods: {
			switchTab() {
				this.tabIndex = Math.abs(this.tabIndex - 1)
			},
			changeTab(){
				
			},
			loadData(){
				if(this.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				
				this.loadingType = 'loading';
				
				setTimeout(() =>{
					this.loadingType = 'noMore';
				}, 2000);
			}
		}
	}
	
</script>
<style lang="scss">
	page, .container{
		background: $page-color-base;
		height: 100%;
	}
	.container .tab {
		padding-top: $page-row-spacing;
		padding-bottom: $page-row-spacing;
		padding-left: $page-row-spacing;
		color: #0952c3;
		font-size: $font-lg;
	}

	.container .tab text {
		padding-right: $page-row-spacing;
		font-weight: bold;
	}

	.container .tab .active {
		font-size: $font-xl;
		color: #000000;
	}
	
	.container .swiper-box{
		height: calc(100% - 110upx);
	}
	.container .list-scroll-content{
		height: 100%;
	}
	.container .uni-swiper-item{
		height: auto;
	}
	.container .list .item .title {
		display: flex;
		padding: 20upx 20upx;
	}

	.container .list .item .title .n {
		width: 50%;
	}

	.container .list .item .title .g {
		width: 50%;
		text-align: right;
	}

	.container .list .item .thead {
		display: flex;
		padding: 0 20upx 10upx 20upx;
	}

	.container .list .item .thead .l {
		width: 35%;
	}

	.container .list .item .thead .c {
		width: 35%;
	}

	.container .list .item .thead .r {
		width: 30%;
		text-align: right;
	}
</style>
