// import wepy from 'wepy';
import http from '../utils/Http'
import Consts from '../api/consts';

export default class base {
  static baseUrl = Consts.baseUrl;
  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
