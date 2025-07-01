<template>
  <div id="app">
    <img src="@assets/logo.png">
    {{#typescript}}
    <h1>Vue 3 + TypeScript</h1>
    {{/typescript}}
    {{#router}}
    <router-view />
    {{else}}
    <HelloWorld />
    {{/router}}
  </div>
</template>

{{#typescript}}
<script setup lang="ts">
{{#unless router}}
import HelloWorld from '@components/index/HelloWorld.vue'
{{/unless}}
</script>
{{else}}
<script>
{{#unless router}}
import HelloWorld from '@components/index/HelloWorld'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
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
