<template>
  <div
    :class="$style.mask"
    @touchstart.prevent="()=> null"
  >
    <div
      ref="test"
      :class="$style.toast"
    >
      <div :class="$style.contant">
        {{ content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      ...this.$style,
      name: 'test',
    }
  },
}
</script>

<style lang='scss' module>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .toast {
    padding: 30px 20px;
    margin: 250px auto 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    .contant {
      font-family: PingFangSC-Regular, Avenir, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: white;
    }
  }
}
</style>
