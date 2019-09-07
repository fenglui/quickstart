<template>
	<view class="drawer">
		<scroll-view class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
		    <view class="swiper-tab-list uni-bold"><label>自选</label></view>
			<view @click="onClick" class="swiper-tab-list uni-bold" v-for="(item, index) in areaList_" :key="index"><label :class="index == 0 ? 'active' : ''">{{item.name}}</label></view>
		</scroll-view>
		<view class="uni-list">
		    <view class="uni-list-cell" v-for="(item, index) in marketList_" :key="index" hover-class="uni-list-cell-hover">
		        <view class="uni-triplex-row">
		            <view class="uni-triplex-left">
		                <text class="uni-title uni-ellipsis">{{item.symbol}}</text>
		            </view>
		            <view class="uni-triplex-right">
		                <text class="uni-h5" :class="item.change > 0 ? ' uni-up' : ' uni-down'">{{item.price}}</text>
		            </view>
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			areaList: {
				type: Array,
				default: () => {
					return []
				}
			},
			marketList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				tabIndex: 0
			}
		},
		computed: {
			areaList_() {
				return this.areaList;
			},
			marketList_() {
				return this.marketList;
			}
		},
		methods: {
			onClick(e) {
				console.log("=====================================")
			},
			onChangeType(){
				this.tabIndex = Math.abs(this.tabIndex - 1);
			}
		}
	}
</script>

<style>
	.drawer{
		padding-top: 20upx;
		width: 100%;
	}
	.drawer .active{
		color: #0056B3;
		border-bottom: 6upx solid #0056B3;
	}
</style>
