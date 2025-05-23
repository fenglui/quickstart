module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  rules: {
    'semi': [0],
    'eqeqeq': [0],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'quotes': [1, "single"], // 引号类型 `` "" ''
    // 关闭缩进检查
    'indent': 'off',
    // 禁用不必要的转义字符
    'no-useless-escape': 0
  },
  'globals': {
    'wx': true,
    'wepy': true
  }
}
