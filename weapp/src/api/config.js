import base from './base';
import wepy from 'wepy';
// import goods from './goods';

export default class config extends base {
  static fieldsToCopy = {
    SWIPER: ['height'],
    IMAGE_BOX: ['heigth', 'width', 'isTitle'],
    GOODS_BOX: ['isCart', 'isPrice', 'isGoodsName', 'skuMode', 'isTips']
  };

  static discount = null;

  /**
   * 获取首页数据
   * source 0=微信顶部入口(默认)，1=代金券，2=消息推送
   * home接口是原nike模板
   * home-v4为新日化模板首页接口 但要求token
   * home-v5为新日化模板首页接口 但不要求token
   * is_new=1 始终传回新人模板
   */
  static async getHomeData(source = 0) {
    const url = `${this.baseUrl}/home-v7?source=${source}`;
    return await this.get(url);
  }

  static async getHomeItems() {
    const url = `${this.baseUrl}/home-items`;
    return await this.get(url);
  }

  /**
   * 获取个人中心首页数据
   */
  static async my() {
    const url = `${this.baseUrl}/my`;
    return await this.get(url).then(data => {
      return data
        ? {
            totalPoints: data.score, // 累计积分
            canGetPoints: data.score_valid, // 可提积分
            totalGrouping: data.tuan_cnt, // 进行中的拼团数量
            totalBargin: data.bargain_cnt, // 进行中的砍价
            orderPending: data.pay_pending_cnt, // 待付款
            orderPayed: data.payed_cnt, // 待发货
            orderShipped: data.shipped_cnt, // 待收货
            orderAfterSale: data.refund_pending_cnt, // 售后进行中
            wxCouponCount: data.coupon_cnt // 微信代金券数量
          }
        : null;
    });
  }

  /**
   * 积分详情页接口
   */
  static async score() {
    const url = `${this.baseUrl}/my/score-info`;
    return await this.get(url).then(data => {
      return data
        ? {
            totalPoints: data.score, // 累计积分
            canGetPoints: data.score_valid, // 可提积分
            isBind: data.is_bind === 1,
            qrCodeImg: data.qr_code
          }
        : null;
    });
  }

  /**
   * 绑定接口
   */
  static async bind(code) {
    const url = `${this.baseUrl}/my/bind`;
    return await this.post(url, { code: code }).then(data => {
      return data;
    });
  }

  /**
   * 写入权限值
   */
  static async setConfig(key, value) {
    // console.warn('[config] setConfig ' + key, value)
    await wx.setStorageSync(key, value);
    wepy.$instance.globalData.auth[key] = value;
  }

  /**
   * 初始化数据 并存入store
   */
  static async init() {
    const url = `${this.baseUrl}/init-v2`;
    const inviteUid = await wepy.getStorageSync('invite_uid');
    const shop = await this.get(url, {
      scene: wepy.$instance.globalData.scene || 0,
      invite_uid: inviteUid,
      launchPath: wepy.$instance.globalData.launchPath
    }).then(async data => {
      if (!data || data.status === 'error') {
        return null;
      }
      await wepy.setStorageSync('pageOnShowReport', data.action_page_switch);
      if (data.refresh_token) {
        await this.setConfig('token', data.refresh_token);
      }
      return {
        // 是否上报页面onShow事件 1 上报
        pageOnShowReport: data.action_page_switch,
        // 下单页面提示文案
        orderTips: data.order_tips,
        shopTips: data.shop_tips,
        couponTips: data.coupon_tips,
        shareTitle: data.share_title,
        name: data.shop.name,
        avatar: data.shop.icon_url,
        phoneNumber: data.hotline,
        servicePhone: data.shop.cs_line,
        // 是否展示优惠券弹窗
        showCoupon: data.show_coupon,
        // 领券中心背景
        couponPickBackImageUrl: data.coupon_back_image_url,
        // 领券中心banner
        couponBannerUrl: data.coupon_banner_url,
        // 权益信息
        guaranteeTitle: data.shop_tips_title,
        guaranteeDetail: data.shop_tips_detail,
        // 小程序分享图 可能为空
        homePageShareUrl: data.share_banner_url,
        // 代金券金额
        wxCouponPrice: parseFloat(data.coupon_price),
        // 社交立减
        socialCoupons: data.social_coupons.map(x => {
          return {
            amount: parseInt(x.amount),
            path: x.path
          };
        }),
        // 弹窗资源设置
        // 弹层图
        wxDialogImage: data.shop.ad_img_url,
        // 按钮图
        wxDialogBtnUseImage: data.shop.ad_button_url,
        // 授权类型，1=当前默认，2=详情页也要求授权
        authType: data.auth_type,
        // 1=老版，2=新版
        homePageType: data.home_type,
        // 我的页面引导公共号图片
        gzh_focus_image_url: data.gzh_focus_image_url,
        // 我的页面引导公共号大图
        gzh_focus_large_image_url: data.gzh_focus_large_image_url,
        // 支付成功引导公众号图
        payed_coupon_image_url: data.payed_coupon_image_url
      };
    });
    if (!shop) {
      return {
        shop: null
      };
    }
    wepy.$instance.globalData.homePageType = shop.homePageType;
    var config = {
      shop: shop
    };
    return config;
  }

  // *** 数据处理方法
  /**
   * 处理页面
   */
  static _processPage(data) {
    if (data == null || data == '') {
      return null;
    }

    const config = typeof data === 'string' ? JSON.parse(data) : data;
    const components = this.processComponents(config.components);
    const { plugins, triggers } = this.processPlugins(config.plugins);
    const param = this.processPageParam(config.param);
    return {
      components,
      plugins,
      triggers,
      param
    };
  }

  /**
   * 处理页面的配置参数
   */
  static processPageParam(data) {
    if (data == null || data == '') {
      return {};
    } else {
      return typeof data === 'string' ? JSON.parse(data) : data;
    }
  }

  /**
   * 处理页面的插件与触发器
   */
  static processPlugins(data) {
    const plugins = [];
    const triggers = [];
    data.forEach(item => {
      if (item.param) {
        const param = JSON.parse(item.param);
        Object.assign(item, param);
        item.param = null;
      }
      if (item.type.indexOf('_TRIGGER') != -1) {
        triggers.push(item);
      } else {
        plugins.push(item);
      }
    });
    return { triggers, plugins };
  }

  /**
   * 拷贝配置参数
   */
  static copyParamToData(component) {
    const { data, type } = component;
    const fields = this.fieldsToCopy[type];
    if (fields != null) {
      data.forEach(item => {
        fields.forEach(field => {
          item[field] = component[field];
        });
      });
    }
    return component;
  }
}
