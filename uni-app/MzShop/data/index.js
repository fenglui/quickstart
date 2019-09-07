const bannerList = ['/static/index/banner.png', '/static/index/banner.png', '/static/index/banner.png']
//第1个ItemContainer的数据
const itemcontainer1 = {
	//商品信息				
	data1: [{
		uri: '/static/index/noswiper/2/first.jpg',
		title: '时尚女装',
		subtitle: '复古上海风',
	}, {
		uri: '/static/index/noswiper/2/second.png',
		title: '时尚女装',
		subtitle: '复古上海风',
	}],
	//banner信息	
	banner: {
		title: '时尚好物 新人专区',
		subtitle: '全场满38元包邮',
		link: '新人专享'
	},
	//ItemContainer一行元素的个数					
	noswipernum2: 2,
}
//第2个ItemContainer的数据	
const itemcontainer2 = {
	data1: [{
		uri: '/static/index/noswiper/3/3.jpg',
		title: '电子频道',
		subtitle: '正品保证',
	}, {
		uri: '/static/index/noswiper/3/2.png',
		title: '文创频道',
		subtitle: '潮流文创聚集地',
	}, {
		uri: '/static/index/noswiper/3/1.png',
		title: '美容频道',
		subtitle: '国民美容仪器',
	}],
	banner: {
		title: '最in频道',
		subtitle: '每日精选 人气爆款',
		link: '更多'
	},
	noswipernum3: 3,
}
//第3个ItemContainer的数据
const itemcontainer3 = {
	data1: [{
		uri: '/static/index/noswiper/4/1.png',
		title: '蕉下Ban...',
		subtitle: '两用伞专场',
	}, {
		uri: '/static/index/noswiper/4/2.png',
		title: 'Coccline...',
		subtitle: '箱包清仓',
	}, {
		uri: '/static/index/noswiper/4/3.png',
		title: 'Tempur',
		subtitle: '航天局认证',
	}, {
		uri: '/static/index/noswiper/4/4.png',
		title: 'Yolanna',
		subtitle: '天丝夏凉特惠',
	}],
	banner: {
		title: '最高折上8折·再满199减100',
		subtitle: '仅限前两小时 立即抢购',
		link: '7.13暑假总动员'
	},
	noswipernum4: 4,
}
//第1个listmall的数据
const listmall1 = {
	//banner数据	
	mallbanner: {
		title: '全球热卖',
		link: '更多',
	},
	//商品信息				
	malldata: [{
		uri: '/static/index/listmall/2/1.jpg',
		title: '太平鸟冬装新款圆领针织衫',
		specialprice: '￥196',
		originprice: '原价￥418'
	}, {
		uri: '/static/index/listmall/2/2.jpg',
		title: 'BananaUnder防晒小黑伞',
		specialprice: '￥199',
	}],
	//一行显示的商品个数	
	mallnum2: 2
}
//第2个listmall的数据		
const listmall2 = {
	malldata: [{
		uri: '/static/index/listmall/3/1.png',
		title: '创意可爱小花 带盖烧烤碗泡面碗',
		specialprice: '￥196',
	}, {
		uri: '/static/index/listmall/3/2.png',
		title: 'Lewu日本文山窑釉下彩马克杯',
		specialprice: '￥288',
	}, {
		uri: '/static/index/listmall/3/3.png',
		title: '北欧简约烟灰色复古玻璃花瓶',
		specialprice: '免费',
	}],
	mallnum3: 3
}
//第3个listmall的数据	
const listmall3 = {
	mallbanner: {
		title: '大牌精选',
		link: '更多',
	},
	malldata: [{
		uri: '/static/index/listmall/1/1.png',
		title: 'GUCCI古驰太阳眼镜女渐变镜片 珍珠墨镜',
		specialprice: '￥2399',
	}],
	mallnum1: 1
}
//第4个listmall的数据	
const listmall4 = {
	malldata: [{
		uri: '/static/index/listmall/4/1.png',
		title: 'Gucci彩绳肩带手提包',
		specialprice: '￥1969',
	}, {
		uri: '/static/index/listmall/4/2.png',
		title: 'Gucci拼色蜜蜂斜挎包',
		specialprice: '￥1969',
	}, {
		uri: '/static/index/listmall/4/3.png',
		title: 'BURBERY拼色手拿包',
		specialprice: '￥1969',
	}, {
		uri: '/static/index/listmall/4/4.png',
		title: 'DIOR刺绣手提包',
		specialprice: '￥1969',
	}],
	mallnum4: 4,
}
//底部单列列表商品数据	
const sola = {
	solabanner: {
		title: '新特卖·每天早10晚8上新',
		link: '更多',
		arrow_uri: './Page_Home/img/arrow.png'
	},
	solalist: [{
		uri: '/static/index/sola/1.jpg',
		title: '新浪漫主义 | DenoiseNY',
		dynamicallyColor: '#f2f2f2',
	}, {
		uri: '/static/index/sola/2.jpg',
		title: '可负担的奢侈感 | Bluebella',
		dynamicallyColor: '#f2f2f2',
	}]
}
export default{
	bannerList,
	itemcontainer1,
	itemcontainer2,
	itemcontainer3,
	listmall1,
	listmall2,
	listmall3,
	listmall4,
	sola
}
