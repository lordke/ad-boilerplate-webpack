// let a ={
//   mode: 'development',
//   context: '/Users/joe/corporation/vue-template',
//   devtool: 'cheap-module-eval-source-map',
//   node: {
//     setImmediate: false,
//     process: 'mock',
//     dgram: 'empty',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty',
//     child_process: 'empty'
//   },
//   output: {
//     path: '/Users/joe/corporation/vue-template/dist',
//     filename: '[name].js',
//     publicPath: '/'
//   },
//   resolve: {
//     symlinks: false,
//     alias: {
//       '@': '/Users/joe/corporation/vue-template',
//       vue$: 'vue/dist/vue.runtime.esm.js',
//       '@src': '/Users/joe/corporation/vue-template/src',
//       '@router': '/Users/joe/corporation/vue-template/src/router',
//       '@views': '/Users/joe/corporation/vue-template/src/router/views',
//       '@layouts': '/Users/joe/corporation/vue-template/src/router/layouts',
//       '@components': '/Users/joe/corporation/vue-template/src/components',
//       '@assets': '/Users/joe/corporation/vue-template/src/assets',
//       '@utils': '/Users/joe/corporation/vue-template/src/utils',
//       '@state': '/Users/joe/corporation/vue-template/src/state',
//       '@design': '/Users/joe/corporation/vue-template/src/design/index.scss'
//     },
//     extensions: [
//       '.js',
//       '.jsx',
//       '.vue',
//       '.json'
//     ],
//     modules: [
//       'node_modules',
//       '/Users/joe/corporation/vue-template/node_modules',
//       '/Users/joe/corporation/vue-template/node_modules/@vue/cli-service/node_modules'
//     ]
//   },
//   resolveLoader: {
//     modules: [
//       'node_modules',
//       '/Users/joe/corporation/vue-template/node_modules',
//       '/Users/joe/corporation/vue-template/node_modules/@vue/cli-service/node_modules'
//     ]
//   },
//   module: {
//     noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
//     rules: [
//       /* config.module.rule('vue') */
//       {
//         test: /\.vue$/,
//         use: [
//           {
//             loader: 'cache-loader',
//             options: {
//               cacheDirectory: '/Users/joe/corporation/vue-template/node_modules/.cache/vue-loader',
//               cacheIdentifier: '11c0a158'
//             }
//           },
//           {
//             loader: 'vue-loader',
//             options: {
//               compilerOptions: {
//                 preserveWhitespace: false
//               },
//               cacheDirectory: '/Users/joe/corporation/vue-template/node_modules/.cache/vue-loader',
//               cacheIdentifier: '11c0a158'
//             }
//           }
//         ]
//       },
//       /* config.module.rule('images') */
//       {
//         test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: 'file-loader',
//                 options: {
//                   name: 'img/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('svg') */
//       {
//         test: /\.(svg)(\?.*)?$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'img/[name].[hash:8].[ext]'
//             }
//           }
//         ]
//       },
//       /* config.module.rule('media') */
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: 'file-loader',
//                 options: {
//                   name: 'media/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('fonts') */
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: 'file-loader',
//                 options: {
//                   name: 'fonts/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('pug') */
//       {
//         test: /\.pug$/,
//         use: [
//           {
//             loader: 'pug-plain-loader'
//           }
//         ]
//       },
//       /* config.module.rule('css') */
//       {
//         test: /\.css$/,
//         oneOf: [
//           /* config.module.rule('css').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('postcss') */
//       {
//         test: /\.p(ost)?css$/,
//         oneOf: [
//           /* config.module.rule('postcss').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('scss') */
//       {
//         test: /\.scss$/,
//         oneOf: [
//           /* config.module.rule('scss').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('sass') */
//       {
//         test: /\.sass$/,
//         oneOf: [
//           /* config.module.rule('sass').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('less') */
//       {
//         test: /\.less$/,
//         oneOf: [
//           /* config.module.rule('less').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('stylus') */
//       {
//         test: /\.styl(us)?$/,
//         oneOf: [
//           /* config.module.rule('stylus').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: true,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: true,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: true,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: true,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: true,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: true
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: true,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('js') */
//       {
//         test: /\.jsx?$/,
//         exclude: [
//           function () { /* omitted long function */ }
//         ],
//         use: [
//           {
//             loader: 'cache-loader',
//             options: {
//               cacheDirectory: '/Users/joe/corporation/vue-template/node_modules/.cache/babel-loader',
//               cacheIdentifier: '9dfa24a6'
//             }
//           },
//           {
//             loader: 'babel-loader'
//           }
//         ]
//       },
//       /* config.module.rule('eslint') */
//       {
//         enforce: 'pre',
//         test: /\.(vue|(j|t)sx?)$/,
//         exclude: [
//           /node_modules/,
//           '/Users/joe/corporation/vue-template/node_modules/@vue/cli-service/lib'
//         ],
//         use: [
//           {
//             loader: 'eslint-loader',
//             options: {
//               extensions: [
//                 '.js',
//                 '.jsx',
//                 '.vue'
//               ],
//               cache: true,
//               cacheIdentifier: '68775a8e',
//               emitWarning: true,
//               emitError: false,
//               formatter: function () { /* omitted long function */ }
//             }
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     /* config.plugin('vue-loader') */
//     new VueLoaderPlugin(),
//     /* config.plugin('define') */
//     new DefinePlugin(
//       {
//         'process.env': {
//           NODE_ENV: '"development"',
//           BASE_URL: '"/"'
//         }
//       }
//     ),
//     /* config.plugin('case-sensitive-paths') */
//     new CaseSensitivePathsPlugin(),
//     /* config.plugin('friendly-errors') */
//     new FriendlyErrorsWebpackPlugin(
//       {
//         additionalTransformers: [
//           function () { /* omitted long function */ }
//         ],
//         additionalFormatters: [
//           function () { /* omitted long function */ }
//         ]
//       }
//     ),
//     /* config.plugin('hmr') */
//     new HotModuleReplacementPlugin(),
//     /* config.plugin('no-emit-on-errors') */
//     new NoEmitOnErrorsPlugin(),
//     /* config.plugin('progress') */
//     new ProgressPlugin(),
//     /* config.plugin('html-main') */
//     new HtmlWebpackPlugin(
//       {
//         templateParameters: function () { /* omitted long function */ },
//         chunks: [
//           'chunk-vendors',
//           'chunk-common',
//           'main'
//         ],
//         template: '/Users/joe/corporation/vue-template/src/pages/index/index.html',
//         filename: 'main.html',
//         title: undefined
//       }
//     ),
//     /* config.plugin('html-test') */
//     new HtmlWebpackPlugin(
//       {
//         templateParameters: function () { /* omitted long function */ },
//         chunks: [
//           'chunk-vendors',
//           'chunk-common',
//           'test'
//         ],
//         template: '/Users/joe/corporation/vue-template/src/pages/test/test.html',
//         filename: 'test.html',
//         title: undefined
//       }
//     ),
//     /* config.plugin('preload-main') */
//     new PreloadPlugin(
//       {
//         rel: 'preload',
//         includeHtmlNames: [
//           'main.html'
//         ],
//         include: {
//           type: 'initial',
//           entries: [
//             'main'
//           ]
//         },
//         fileBlacklist: [
//           /\.map$/,
//           /hot-update\.js$/
//         ]
//       }
//     ),
//     /* config.plugin('prefetch-main') */
//     new PreloadPlugin(
//       {
//         rel: 'prefetch',
//         includeHtmlNames: [
//           'main.html'
//         ],
//         include: {
//           type: 'asyncChunks',
//           entries: [
//             'main'
//           ]
//         }
//       }
//     ),
//     /* config.plugin('preload-test') */
//     new PreloadPlugin(
//       {
//         rel: 'preload',
//         includeHtmlNames: [
//           'test.html'
//         ],
//         include: {
//           type: 'initial',
//           entries: [
//             'test'
//           ]
//         },
//         fileBlacklist: [
//           /\.map$/,
//           /hot-update\.js$/
//         ]
//       }
//     ),
//     /* config.plugin('prefetch-test') */
//     new PreloadPlugin(
//       {
//         rel: 'prefetch',
//         includeHtmlNames: [
//           'test.html'
//         ],
//         include: {
//           type: 'asyncChunks',
//           entries: [
//             'test'
//           ]
//         }
//       }
//     ),
//     /* config.plugin('copy') */
//     new CopyWebpackPlugin(
//       [
//         {
//           from: '/Users/joe/corporation/vue-template/public',
//           to: '/Users/joe/corporation/vue-template/dist',
//           ignore: [
//             'index.html',
//             '.DS_Store',
//             '/Users/joe/corporation/vue-template/src/pages/index/index.html',
//             '/Users/joe/corporation/vue-template/src/pages/test/test.html'
//           ]
//         }
//       ]
//     ),
//     /* config.plugin('manifest') */
//     new ManifestPlugin(
//       {
//         fileName: 'mf.json'
//       }
//     )
//   ],
//   entry: {
//     main: [
//       '/Users/joe/corporation/vue-template/src/pages/index/main.js'
//     ],
//     test: [
//       '/Users/joe/corporation/vue-template/src/pages/test/test.js'
//     ]
//   },
//   name: 'Vue Enterprise Boilerplate'
// }
