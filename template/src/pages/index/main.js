// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from '@modules/index/App'

{{#warm}}
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
{{/warm}}
{{#wbui}}
import Vant from 'vant'
import 'vant/lib/index.css'
{{/wbui}}
{{#router}}
import router from '@router/index' 
{{/router}}
import 'normalize.css'
{{#vuex}}
import { createPinia } from 'pinia'
{{/vuex}}
// 自动注册所有component到Vue上
import '@components/_globals'
{{#mobile}}
import FastClick from 'fastclick'

FastClick.attach(document.body)
{{/mobile}}

const app = createApp(App)

{{#warm}}
app.use(ElementPlus)
{{/warm}}
{{#wbui}}
app.use(Vant)
{{/wbui}}
{{#router}}
app.use(router)
{{/router}}
{{#vuex}}
app.use(createPinia())
{{/vuex}}

app.mount('#app')
