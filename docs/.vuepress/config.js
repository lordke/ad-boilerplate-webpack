module.exports = {
  title: 'WBAD',
  description: '前端脚手架',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'webpack',
        collapsable: false,
        children: [
          '/webpack/',
          '/webpack/develop.md',
          '/webpack/architecture.md',
          '/webpack/language.md',
          '/webpack/lint.md',
          '/webpack/vuex.md',
        ]
      }
      // ['/page-b', 'Explicit link text']
    ]
  }
}

