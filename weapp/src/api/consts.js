
// 公众号相关场景值
const sceneOfMpCfg = [1043, 1020, 1035, 1058, 1067, 1074, 1082, 1091]
// 小程序版本
const version = 'v1.8.16';
// api服务
const baseDevUrl = 'https://e.g.gaoshou.me/jt-api';
const baseProdUrl = 'https://jutaol.com/jt-api';
// 环境 dev 或 prod
const env = 'prod';

export default class Consts {
  /**
   * 公众号相关场景值
   * @returns {Array}
   */
  static sceneOfMp = sceneOfMpCfg;
  // 小程序版本
  static version = version;
  // 环境 dev 或 prod
  static env = env;
  // api服务地址
  static baseUrl = env === 'prod' ? baseProdUrl : baseDevUrl;
}
