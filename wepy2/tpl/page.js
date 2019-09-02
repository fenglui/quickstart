/**
 * pages页面快速生成脚本
 * 配置：在package.json的scripts项目加入 "page": "node scripts/page"
 * 用法：npm run page `目录` `文件名`
 * author: fenglui
 * date: 2019.08.29
 */

const fs = require('fs')
var dirName = process.argv[2]
var pageName = process.argv[3]
if (!pageName) {
  console.log('文件名不能为空！')
  console.log('示例：npm run page home your_page_name')
  process.exit(0)
}
dirName = dirName.toLowerCase()
pageName = pageName.toLowerCase()
// const capPirName = pageName.substring(0, 1).toUpperCase() + pageName.substring(1);

// 页面模板
const indexTep = `
<style lang="scss">
.container{
}
</style>
<template>
    <div class="container">
    </div>
</template>
<script>
    import wepy from '@wepy/core'
    import eventHub from '../../common/eventHub';
    import { mapState } from '@wepy/x';
    // import store from '../../store';
    import basePageMixin from '../../mixins/base'

    wepy.page({
        // store,
        config: {
            // navigationBarTitleText: ''
        },
        // Page 级别 hook
        hooks: {
            // 'before-event': function (event, params) {
            // },
            // 'before-setData': function (dirty) {
            // }
        },
        mixins: [basePageMixin] // ,
        // data: {},
        // computed: {},
        // methods: {},
        // async onLoad() {},
        // async onShow() {},
        // async onReady() {},
        // async onHide() {},
        // async onUnload() {},
        // async onPullDownRefresh() {},
        // async onReachBottom() {},
        // async onShareAppMessage() {},
        // async onPageScroll() {},
        // async onResize() {},
        // async onTabItemTap() {},
        // async created() {},
        // async attached() {},
        // async ready() {},
        // async moved() {},
        // async detached() {}
    })
</script>
<config>
{
    navigationBarTitleText: '',
    usingComponents: {
    }
}
</config>

`
// scss文件模版
// const scssTep = ``
var exists = fs.existsSync(`./src/pages/${dirName}`)
if (!exists) {
  fs.mkdirSync(`./src/pages/${dirName}`) // mkdir $1
}
process.chdir(`./src/pages/${dirName}`) // cd $1
fs.writeFileSync(`${pageName}.wpy`, indexTep) // wpy
// fs.writeFileSync(`${pageName}.scss`, scssTep); // scss
