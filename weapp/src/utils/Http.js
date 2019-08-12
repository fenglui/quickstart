import wepy from 'wepy';
import Tips from './Tips';
// HTTP工具类
export default class http {
  static async request (method, url, data, loading = true) {
    const param = {
      url: url,
      method: method,
      data: data
    };
    const res = await wepy.request(param)
    // console.warn('[Http]', res)
    if (res.errMsg !== 'request:ok') {
      Tips.alert('网络请求错误');
      return {
        status: 'error',
        data: null,
        code: 1
      }
    }
    // 未登录或token已过期
    try {
      if (res && res.data && res.data.code === 40100) {
        await wepy.removeStorage({key: 'user'});
        wepy.$instance.globalData.auth['token'] = null;
        await wepy.removeStorage({key: 'token'});
      }
    } catch (error) {
      console.error(error)
    }
    var result = {}
    if (res.data && res.data.payload) {
      result = {
        status: res.data.status,
        data: res.data.payload,
        code: 0
      }
    } else if (res.data && res.data.code && [40000, 40001].indexOf(res.data.code) !== -1) {
      // console.log('code 40000', res.data)
      result = {
        data: {
          status: res.data.status,
          msg: res.data.msg,
          ext: res.data.ext
        },
        code: 0
      }
    }

    if (res.data && res.data.status && res.data.status === 'ok' && !res.data.code) {
      if (result.data) {
        result.data.code = 0
      } else {
        result.data = {
          code: 0
        }
      }
    }

    if (res.data.status === 'error') {
      return {
        status: 'error',
        msg: res.data.msg,
        ext: res.data.ext,
        code: 1
      }
    }

    return result.data || res.data.payload;
  }

  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading);
  }

  static put (url, data, loading = true) {
    return this.request('PUT', url, data, loading);
  }

  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading);
  }

  static patch (url, data, loading = true) {
    return this.request('PATCH', url, data, loading);
  }

  static delete (url, data, loading = true) {
    return this.request('DELETE', url, data, loading);
  }
}
