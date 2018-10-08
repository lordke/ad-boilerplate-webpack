<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '欢迎使用Vuejs多页模板'
      }
    }
  }
</script>

<style module>
h1 {
  font-weight: normal;
}
</style>

