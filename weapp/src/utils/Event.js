const WxNotificationCenter = require('./WxNotificationCenter.js');

export default class Event {
  // 首页展示事件
  static HOME_INDEX_RELOAD = 'HOME_INDEX_RELOAD';

  static listen(eventName, callback, observer) {
    // 先移除监听
    this.remove(eventName, observer);
    WxNotificationCenter.addNotification(eventName, callback, observer);
  }

  static emit(eventName, params) {
    WxNotificationCenter.postNotificationName(eventName, params);
  }

  static remove(eventName, observer) {
    WxNotificationCenter.removeNotification(eventName, observer);
  }
}
