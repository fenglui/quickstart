import { getStore } from 'wepy-redux';
import { SAVE, REMOVE } from './types/cache';
import config from '../api/config';

const store = getStore();
// 元数据
const meta = {};
// 是否调试
const IS_DEBUG = false;
// 超时时间
const CACHE_TIMEOUT = 5 * 60 * 1000;
// 嵌套字段，需要拆解缓存
const NESTED_KEY = ['config'];
// 初始化需要加载的字段
const INIT_KEY = ['config'];
// 加载状态
let isLoading = false;
// 等待队列
let loadingQueue = [];

/**
 * 构造取值器
 */
const get = key => {
  return (state) => {
    return state.cache[key]
  }
};

/**
 * 构造取值器
 */
const remove = key => {
  store.dispatch({
    type: REMOVE,
    payload: {
      key: key
    }
  });
};

/**
 * 保存数据
 */
const save = (key, data) => {
  if (IS_DEBUG) {
    console.info(`[store] save key=${key}, data=`, data);
  }
  store.dispatch({
    type: SAVE,
    payload: {
      key: key,
      value: data
    }
  });
};

/**
 * 初始化
 */
const init = async () => {
  // 判读是否正在加载，正在加载则等待
  if (isLoading) {
    console.info('[store] store is loading, wait completed');
    return new Promise(resolve => {
      const callback = () => {
        resolve();
      };
      loadingQueue.push(callback);
    });
  } else {
    // 开始初始化
    console.info('[store] start init store');
    isLoading = true;
    await use(...INIT_KEY);
    // 清空等待队列
    console.info('[store] store init completed');
    isLoading = false;
    loadingQueue.forEach(callback => callback());
    loadingQueue = [];
  }
};

/**
 * 加载指定字段的数据，并发加载，一次性返回，已经加载的数据不会再次加载
 */
const use = async (...fields) => {
  // 过滤已加载完毕的字段
  const fetchFileds = fields.filter(field => !exists(field));
  if (fetchFileds.length > 0) {
    // console.info(`[store] use store: fields=${fetchFileds}`);
    // 加载未加载的数据
    await load(fetchFileds);
  } else {
    console.info('[store] use store: all fields cached');
  }
};

/**
 * 加载指定字段的数据
 */
const load = async (fields) => {
  console.info(`[store] load store: fields = ${fields}`);
  // 将字段构造Promise
  const fetchPromises = fields.map(field => fetch(field));
  // 获取所有数据，等待最后一个返回
  const data = await Promise.all(fetchPromises);
  // 保存结果
  fields.forEach((field, index) => {
    const filedData = data[index];
    // console.info(`[store] filedData is ${JSON.stringify(filedData)}`);
    if (isNested(field)) {
      console.info(`[store] ${field} is Nested`);
      const keys = Object.keys(filedData);
      console.info(`[store] load [${field}] nest fields = ${keys}`);
      keys.forEach(key => save(key, filedData[key]));
    } else {
      console.info(`[store] ${field} is not Nested`);
      save(field, filedData);
    }
  });
  // 保存元数据
  save('meta', meta);
};

/**
 * 刷新数据
 */
const refresh = async (...fields) => {
  console.info(`[store] refresh store: fields = ${fields}`);
  await load(fields);
};

/**
 * 加载数据， 返回Promise
 */
const fetch = async (field) => {
  console.info(`[store] fetch store: field = ${field}`);
  // 先更新元数据
  updateMeta(field);
  // 再获取Promise对象
  switch (field) {
    case 'config':
      return await config.init();
  }
};

/**
 * 更新元数据
 */
const updateMeta = (field) => {
  if (meta[field] == null) {
    meta[field] = {};
    meta[field].init = true;
  }
  meta[field].updateTime = new Date().getTime();
};

/**
 * 判断是否为嵌套字段
 */
const isNested = field => {
  return NESTED_KEY.some(key => key == field);
};

/**
 * 判断是否存在
 */
const exists = key => {
  // 判断是否初始化过
  if (meta[key] == null || meta[key].init != true) {
    return false;
  }
  // 判断是否过期
  const updateTime = meta[key].updateTime;
  const interval = new Date().getTime() - updateTime;
  return interval < CACHE_TIMEOUT;
};

export default {get, remove, save, use, refresh, init}
