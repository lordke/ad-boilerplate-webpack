<template>
  <div class="hello">
    <h1 class="title">
      \{{ msg }}
    </h1>
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
.title {
  font-weight: normal;
}
</style>

