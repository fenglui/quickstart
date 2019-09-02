export default {
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function (dirty) {
      console.log('[page hook] setData dirty: ', dirty)
      if (Math.random() < 0.2) {
        console.log('setData canceled')
        return false // Cancel setData
      }
      dirty.time = +new Date()
      return dirty
    }
  },
  data: {
    mixin: 'MixinPageBase'
  },
  methods: {
    mixintap () {
      this.mixin = 'MixinPageBase' + (Math.random() + '').substring(3, 7)
      console.log('mixin method tap')
    },
    tap () {
      console.log('tap in mixin')
    }
  },
  created () {
    console.log('created in mixin')
  }
}
