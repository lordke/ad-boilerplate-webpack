<template>
  <div class="hello">
    <h1 class="title">
      \{{ msg }}
    </h1>
  </div>
</template>
{{#unless typescript}}
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎使用Vuejs多页模板'
    }
  }
}
{{/unless}}
{{#typescript}}
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  msg: string = '欢迎使用Vuejs多页模板'
}
{{/typescript}}
</script>

<style module>
.title {
  font-weight: normal;
}
</style>
