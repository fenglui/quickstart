import Tips from './Tips';
import wepy from 'wepy';

export default class WxUtils {
  static isTab (url) {
    if (!wepy.$instance.config.tabBar) {
      return false
    }
    if (!wepy.$instance.config.tabBar.list) {
      return false
    }
    return wepy.$instance.config.tabBar.list.map(x => { return '/' + x.pagePath }).some(path => path == url);
  };

  static home() {
    this.backOrRedirect(wepy.$instance.globalData.homePage || wepy.$instance.globalData.homePage)
  }

  static switchOrNavigate(url) {
    if (this.isTab(url)) {
      wx.switchTab({
        url: url
      })
    } else {
      wx.navigateTo({
        url: url
      });
    }
  }

  /**
   * 如果能够后退（多层），则navigaetBack，否则调用redirectTo
   */
  static backOrRedirect(url) {
    if (this.isTab(url)) {
      wx.switchTab({
        url: url
      })
    } else {
      const pages = getCurrentPages();
      // route在低版本不兼容
      const index = pages.findIndex(item => ('/' + item.__route__) == url);
      if (pages.length < 2 || index < 0) {
        wx.redirectTo({
          url: url
        });
      } else {
        const delta = pages.length - 1 - index;
        wx.navigateBack({
          delta: delta
        });
      }
    }
  }
  /**
   * 如果能够后退（多层），则navigaetBack，否则调用navigateTo
   */
  static backOrNavigate(url) {
    if (this.isTab(url)) {
      wx.switchTab({
        url: url
      })
    } else {
      const pages = getCurrentPages();
      // route在低版本不兼容
      const index = pages.findIndex(item => ('/' + item.__route__) == url);
      if (pages.length < 2 || index < 0) {
        wx.navigateTo({
          url: url
        });
      } else {
        const delta = pages.length - 1 - index;
        wx.navigateBack({
          delta: delta
        });
      }
    }
  }

  static wxPay(param) {
    return new Promise((resolve, reject) => {
      wx.requestPayment({
        ...param,
        complete: res => {
          if (res.errMsg == 'requestPayment:ok') {
            resolve(res);
          } else {
            reject(res);
          }
        }
      });
    });
  }

  /**
   * 兼容性判断
   */
  static canIUse(str) {
    if (wx.canIUse) {
      return wx.canIUse(str);
    } else {
      return false;
    }
  }
  /**
   * 检查SDK版本
   */
  static isSDKExipred() {
    const {SDKVersion} = wx.getSystemInfoSync();
    console.info(`[version]sdk ${SDKVersion}`);
    return SDKVersion == null || SDKVersion < '2.2.2'
  }
  /**
   * 检查SDK版本
   */
  static checkSDK() {
    if (this.isSDKExipred()) {
      Tips.modal('您的微信版本太低，为确保正常使用，请尽快升级');
    }
  }

    /**
   * 选择图标（最大大小限制）
   */
  static chooseImage(param, maxSize) {
    Tips.loading();
    return wepy.chooseImage(param).then(async ({tempFilePaths, tempFiles}) => {
      if (tempFiles && maxSize) {
        const removeIndex = [];
        tempFiles.forEach((file, index) => {
          const limit = maxSize * 1024 * 1024;
          if (file.size > limit) {
            removeIndex.push(index);
          }
        });
        const posStr = removeIndex.map(v => v + 1).join(',');
        if (removeIndex.length > 0) {
          removeIndex.forEach(i => tempFilePaths.splice(i, 1));
          await Tips.alert(`第${posStr}张图超过${maxSize}M`);
        }
      }
      Tips.loaded();
      return tempFilePaths;
    }).catch(() => {
      Tips.loaded();
      return [];
    });
  }
}
