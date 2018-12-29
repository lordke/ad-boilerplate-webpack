# lint

### lint 工具

- `JavaScript` is linted by `ESLint` and formatted by `Prettier`
- `HTML` (in templates and JSX) is linted by `ESLint`
- `CSS` is linted by `Stylelint` and formatted by `Prettier`
- `Markdown` is linted by `Markdownlint` and formatted by `Prettier`
- `JSON` is formatted by `Prettier`

### lint规则

项目相关的lint配置文件如下

- [ESLint](https://eslint.org/docs/user-guide/configuring)
  - `.eslintrc.js`
  - `.eslintignore`
- [Stylelint](https://stylelint.io/user-guide/configuration/)
  - `stylelint.config.js`
- [Markdownlint](https://github.com/markdownlint/markdownlint/blob/master/docs/configuration.md)
  - `.markdownlintrc`
- [Prettier](https://prettier.io/docs/en/configuration.html)
  - `.prettierrc.js`
  - `.prettierignore`

### Pre-commit

暂存区文件在commit之前，会自动运行`lint`和`test`

