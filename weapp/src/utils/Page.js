import http from './Http';

export default class Pagination {
  constructor(url, processFunc, listPropName, totalPropName, otherPropName) {
    // 数据访问地址
    this.url = url;
    // 数据集合
    this.list = [];
    // 起始数据
    this.start = 0;
    // 加载数据条数
    this.count = 10;
    // 数据处理函数
    this.processFunc = processFunc;
    // 正在加载中
    this.loading = false;
    // 参数
    this.params = [];
    // 是否底部
    this.reachBottom = false;
    // 是否为空
    this.empty = true;
    // 是否需要清除
    this.toClear = false;
    // 分页数据的属性名称
    this.listPropName = listPropName;
    // 共有多少条数据的属性名
    this.totalPropName = totalPropName;
    this.otherPropName = otherPropName;
    this.totalNum = 0;
  }

  /**
   * 加载下一页数据
   */
  async next(args) {
    const param = {
      offset: this.start,
      limit: this.count
    };
    if (this.loading) {
      console.warn('page loading!');
      return this;
    }
    // 附加参数
    this.loading = true;
    try {
      Object.assign(param, args);
      const httpData = await http.get(this.url, param);

      const data = this.listPropName ? httpData[this.listPropName] : httpData;
      if (this.totalPropName) {
        this.totalNum = parseInt(httpData[this.totalPropName]);
      }
      // console.log('this.otherPropName', this.otherPropName, httpData[this.otherPropName])
      if (this.otherPropName) {
        const type = typeof this.otherPropName;
        console.log('typeof otherPropName is ' + type);
        if (type === 'string') {
          this[this.otherPropName] = httpData[this.otherPropName];
        } else if (type === 'object') {
          for (let index = 0; index < this.otherPropName.length; index++) {
            this[this.otherPropName[index]] =
              httpData[this.otherPropName[index]];
          }
        }
      }
      // 底部判断
      if (data === null || data.length < 1) {
        if (this.toClear) {
          this.clear();
        } else {
          this.reachBottom = true;
        }
        return this;
      }
      this.empty = false;
      // 处理数据
      this._processData(data);
      // 设置数据
      if (this.toClear) {
        this.list = data;
        this.toClear = false;
      } else {
        this.list = this.list.concat(data);
      }
      this.start += this.count;
      if (data.length < this.count) {
        this.reachBottom = true;
      }
      return this;
    } finally {
      this.loading = false;
    }
  }

  /**
   * 恢复到第一页
   */
  reset() {
    this.empty = true;
    this.toClear = true;
    this.start = 0;
    this.totalNum = 0;
    this.reachBottom = false;
  }
  clear() {
    this.toClear = false;
    this.start = 0;
    this.list = [];
    this.totalNum = 0;
  }

  /**
   * 处理数据（私有）
   */
  _processData(data) {
    if (this.processFunc) {
      for (let i in data) {
        const result = this.processFunc(data[i]);
        // console.log('page 里的this.processFunc(data[i])的result', result)
        if (result) {
          data[i] = result;
        }
      }
    }
  }
}
