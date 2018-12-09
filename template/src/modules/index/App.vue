<template>
  <div id="app">
    <img src="@assets/logo.png">
    {{#typescript}}
    <h1>typescript</h1>
    {{/typescript}}
    {{#router}}
    <router-view />
    {{else}}
    <HelloWorld />
    {{/router}}
  </div>
</template>
{{#typescript}}
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
{{else}}
<script>
{{/typescript}}
{{#unless router}}
import HelloWorld from '@components/index/HelloWorld'

{{/unless}}
{{#unless typescript}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
{{/unless}}
{{#typescript}}
{{#router}}
@Component
{{else}}
@Component({
  componts: {
    HelloWorld
  }
})
{{/router}}
export default class App extends Vue {}
{{/typescript}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
