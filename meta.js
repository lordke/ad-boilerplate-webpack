const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  
  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '项目名称',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: '项目描述(Project description)',
      default: 'A Vue.js project',
    },
    // author: {
    //   when: 'isNotTest',
    //   type: 'string',
    //   message: 'Author',
    // },
    build: {
      when: 'isNotTest',
      type: 'list',
      message: 'Vue build（请选择Vue的版本）',
      choices: [
        {
          name: 'Runtime + Compiler: recommended for most users（ 运行时加模板编译 ）',
          value: 'standalone',
          short: 'standalone',
        },
        {
          name:
            'Runtime-only: about 6KB lighter min+gzip,（不包含模板编译功能，只能在 .vue 文件中使用template）',
          value: 'runtime',
          short: 'runtime',
        },
      ],
    },
    mobile: {
      when: 'isNotTest',
      type: 'confirm',
      message: '您的项目是移动端项目吗?（ 将使用VW配置移动端分辨率适配？）',
    },
    wbui: {
      when: 'isNotTest && mobile',
      type: 'confirm',
      message: '是否使用移动端组件库（ wbui-m ）'
    },
    warm: {
      when: 'isNotTest && !mobile',
      type: 'confirm',
      message: '是否使用组件库（ warm ）'
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vue-router?（ 使用vue-router吗？）',
    },
    vuex: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Install vuex?（ 使用vuex管理你的数据吗）',
    },
    lint: {
      when: 'isNotTest',
      type: 'confirm',
      message: '想要使用Lint吗（包括ESLint、Stylelint、Markdownlint、Prettier）?',
    },
    // lintConfig: {
    //   when: 'isNotTest && lint',
    //   type: 'list',
    //   message: '选择一个ESLint预设 Pick an ESLint preset',
    //   choices: [
    //     {
    //       name: 'Standard (https://github.com/standard/standard)',
    //       value: 'standard',
    //       short: 'Standard',
    //     },
    //     {
    //       name: 'Airbnb (https://github.com/airbnb/javascript)',
    //       value: 'airbnb',
    //       short: 'Airbnb',
    //     },
    //     {
    //       name: 'none (configure it yourself)',
    //       value: 'none',
    //       short: 'none',
    //     },
    //   ],
    // },
    unit: {
      when: 'isNotTest',
      type: 'confirm',
      message: '（ 想要使用单元测试吗？）Set up unit tests',
    },
    runner: {
      when: 'isNotTest && unit',
      type: 'list',
      message: '（ 选择一个单元测试runtime ）Pick a test runner',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (configure it yourself)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    },
    e2e: {
      when: 'isNotTest',
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message:
        '(项目创建完成之后是否马上运行 npm i 安装依赖) Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e',
    'src/router/**/*': 'router',
    'src/store/**/*': 'vuex'
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
