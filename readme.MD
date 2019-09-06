# 环境要求

## 操作系统

### WIN10 x64

### 激活

[KMS_VL_ALL - 一个精巧灵活的激活批处理](https://github.com/kkkgo/KMS_VL_ALL)

[lastest release](https://github.com/kkkgo/KMS_VL_ALL/archive/master.zip)

### 版本控制 Git

#### Git版本控制系统

[GIT 内核](https://git-scm.com/download/win)

[<image src="https://tortoisegit.org/images/logo.svgz" height="84"  />](https://tortoisegit.org/)

[tortoisegit - git windows 客户端](https://tortoisegit.org/)

## 原型设计

[<img src="https://www.axure.com/wp-content/uploads/2019/04/axure_icon_125.svg" width="84" />](https://www.axure.com/)

### Axure 9.0

[Axure Windows 9 download](http://zdfans7.com/ax9_29847.zip)

### Axure RP 8

[Axure Windows 9 download](https://axure.cachefly.net/versions/8-0/AxureRP-Setup-3382.exe)

Licensee：zdfans

Key：fZw2VoYzXakllUuLVdTH13QYWnjD6NZrxgubQkaRyxD5+HNMqdr+WZKkaa6IoE5N

## 协作工具

### 蓝湖

[蓝湖 - 国人自己的 Axure Cloud](https://lanhuapp.com)

#### [Axure插件(for 产品)](https://lanhuapp.com/prd)

#### [PS插件(for 设计)](https://lanhuapp.com/ps)

#### PS (for 设计)

[TODO] Photoshop_CC_18.1.1_CHS_3D_201708_X64

## 测试环境

### 管理员打开命令行 见tools

### node + wepy + 微信小程序开发工具

[install nodejs from nodejs.org](https://nodejs.org/en/)

安装cnpm （npm淘宝镜像）

```console
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### wepy 1.x

全局安装或更新 wepy-cli

```console
cnpm install -g wepy-cli
```

### wepy 2.x

同时维护 WePY 1.7.x 和 WePY 2.0.x 的开发者，应当考虑在当前项目安装 CLI，而非全局安装。可以直接使用 1.7.x 的 CLI 去初始化 2.0.x 的项目

```console
wepy init standard#2.0.x myproj
```

### 运行一个wepy项目（Hot Reload 模式）

进入项目目录执行

```console
npm run dev
```

### 其他工具

安装快删工具

```console
cnpm install -g rimraf
```

### 微信小程序相关

#### [微信小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

安装后，导入小程序项目，目标路径为wepy项目下的dist目录

### 代码和文本编辑器

[Visual Studio Code](https://code.visualstudio.com/)

### [微信公众平台](https://mp.weixin.qq.com/)

### 素材

#### [图怪兽](https://818ps.com)

### 参考

[xiaopiu 快速原型](https://xiaopiu.com/i/gFcm6O)

[产品经理交互设计社区](http://www.webppd.com)

[链家原型](https://www.xiaopiu.com/square?page=6&libPop=project&libId=59f199c5e7485455c20eb7bb)

[《增长黑客：如何低成本实现爆发式成长》] 微信读书有免费版

## 常见问题

### [关于win10安装软件出现2503、2502错误的解决方法](https://blog.csdn.net/u012750283/article/details/65935854)

### node_modules依赖冲突需要项目依赖

快速删除node_modules目录

```console
rimraf node_modules
```

重新安装依赖

```console
cnpm install
```
