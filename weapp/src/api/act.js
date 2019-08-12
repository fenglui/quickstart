import wepy from 'wepy';
import base from './base';

/**
 *  act服务类
 */
export default class act extends base {
   /**
   * 获取活动信息
   * @returns target_type 目标类型：1=H5连接，2=原生地址 target_url 目标地址
   */
  static info (id) {
    const url = `${this.baseUrl}/act?act_id=${id}&scene=${wepy.$instance.globalData.scene}`;
    return this.get(url);
  }
}
