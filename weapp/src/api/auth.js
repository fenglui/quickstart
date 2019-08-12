import base from './base'
import wepy from 'wepy';
import store from '../store/utils';
import WxUtils from '../utils/WxUtils';

/**
 * 权限服务类
 */
export default class auth extends base {
  /**
   * 一键登录
   */
  static async login() {
    const token = await this.getConfig('token');
    const hasToken = token != null && token != ''
    if (!hasToken) {
      await this.doLogin()
    }
    console.warn('[auth] [login] token already exists')
  }

  /**
   * 判断用户是否已登录
   */
  static async isUserLogin() {
    try {
      // 检查
      const hasConfigUser = await this.hasConfig('user')
      // console.warn('[auth] [isUserLogin] hasConfigUser is ' + hasConfigUser)
      if (hasConfigUser) {
        const cfg = await this.getConfig('user')
        store.save('user', cfg)
        return true
      }
      console.info('[auth] user check fail')
      // 重新登录
      // await this.doLogin();
      // 保存登录信息
      const rawUser = await this.getUserInfo()
      const user = {
        avatarUrl: rawUser.userInfo.avatarUrl,
        nickName: rawUser.userInfo.nickName
      }
      await this.setConfig('user', user);
      store.save('user', user);
      return true
    } catch (error) {
      // getUserInfo:fail scope unauthorized
      console.error('[auth] [isUserLogin]', error);
      return false
    }
  }

  /**
   * 传入用户信息字段
   */
  static async userInfoReport() {
    const { code } = await wepy.login();
    const inviteUid = await wepy.getStorageSync('invite_uid')
    const info = await this.getUserInfo()
    await this.post(`${this.baseUrl}/report-user`, {
      code: code,
      iv: info.iv,
      encryptedData: info.encryptedData,
      scene: wepy.$instance.globalData.scene || 0,
      invite_uid: inviteUid,
      launchPath: wepy.$instance.globalData.launchPath
    })
  }

  /**
   * 获取用户信息
   */
  static async user(param = { block: false, redirect: false, redirectUrl: '' }, userInfo) {
    try {
      // 检查
      // const isUserLogin = await this.isUserLogin()
      // console.warn('isUserLogin is ' + isUserLogin)
      // if (isUserLogin) {
      //   return true;
      // }
      console.info('[auth] user check fail')
      // 获取用户信息
      const rawUser = userInfo != null ? userInfo : await this.getUserInfo();
      // console.warn('[auth] [user] rawUser is', rawUser)
      // 解密信息
      const user = {
        avatarUrl: rawUser.userInfo.avatarUrl,
        nickName: rawUser.userInfo.nickName
      }
      // 保存登录信息
      await this.setConfig('user', user)
      store.save('user', user)
      return true;
    } catch (error) {
      console.error('[auth] 授权失败', error);
      if (param.block) {
        const url = `/pages/home/login?redirect=${param.redirect}&redirectUrl=${param.redirectUrl}`
        store.save('redirectUrl', param.redirectUrl);
        if (param.redirect) {
          WxUtils.backOrRedirect(url);
        } else {
          WxUtils.backOrNavigate(url);
        }
      }
      return false;
    }
  }

  /**
   * 执行登录操作
   */
  static async doLogin() {
    console.warn('[auth] [doLogin]')
    const result = await this.session()
    console.warn('[auth] [doLogin]', result)
    if (result && result.user_id) {
      await this.setConfig('user_id', result.user_id)
    }
    if (result && result.token) {
      await this.setConfig('token', result.token)
    }
  }

  static async getUserInfo() {
    const info = await wepy.getUserInfo({
      lang: 'zh_CN'});
    // console.warn('getUserInfo', info)
    return info
  }

  static async guestSession() {
    const { code } = await wepy.login();
    const result = await this.post(`${this.baseUrl}/wx-login`, {
      code: code
    })
    if (result && result.token) {
      await this.setConfig('token', result.token)
    }
    return result
  }

  /**
   * 获取会话
   */
  static async session() {
    const { code } = await wepy.login();
    const inviteUid = await wepy.getStorageSync('invite_uid')
    var data = null
    try {
      const info = await this.getUserInfo();
      data = {
        code: code,
        iv: info.iv,
        encryptedData: info.encryptedData,
        scene: wepy.$instance.globalData.scene || 0,
        invite_uid: inviteUid,
        launchPath: wepy.$instance.globalData.launchPath
      }
    } catch (error) {
      data = {
        code: code,
        scene: wepy.$instance.globalData.scene,
        invite_uid: inviteUid,
        launchPath: wepy.$instance.globalData.launchPath
      }
    }

    const res = await this.post(`${this.baseUrl}/wx-login`, data)
    if (res.status === 'error' && res.msg === '微信授权失败') {
      this.sessionRetryTimes = this.sessionRetryTimes + 1
      wepy.$instance.globalData.sessionRetryTimes = wepy.$instance.globalData.sessionRetryTimes + 1
      if (wepy.$instance.globalData.sessionRetryTimes >= 3) {
        wx.showModal({
          title: '错误',
          content: '获取用户授权信息失败',
          showCancel: true
        });
        return null
      }
      // 重试
      return this.session()
    }

    if (res.status === 'error' && res.msg === 'appkey有误') {
      wx.showModal({
        title: '错误',
        content: 'appkey有误',
        showCancel: true
      })
      return null
    }
    return res
  }

  /**
   * 设置权限值
   */
  static async getConfig(key) {
    const value = await wx.getStorageSync(key)
    // console.warn('getConfig ' + key, value)
    return value
  }

  /**
   * 检查是否存在权限制
   */
  static async hasConfig(key) {
    const value = await this.getConfig(key)
    // console.warn('hasConfig ' + key, value)
    const res = value != null && value != ''
    // console.warn('hasConfig ' + key + ' = ' + res)
    return res
  }

  /**
   * 写入权限值
   */
  static async setConfig(key, value) {
    // console.warn('setConfig ' + key, value)
    await wx.setStorageSync(key, value);
    wepy.$instance.globalData.auth[key] = value;
  }

  /**
   * 删除权限值
   */
  static async removeConfig(key) {
    console.info(`[auth] clear auth config [${key}]`);
    wepy.$instance.globalData.auth[key] = null;
    await wepy.removeStorage({key: key});
  }
}
