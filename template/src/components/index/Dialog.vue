<template>
  <section 
    v-show="isShow" 
    id="moreWrap"
  >
    <section class="topBar">
      <button 
        v-if="closeSet" 
        class="close" 
        @touchend="close"
      >
        {{ closeText }}
      </button>
      <h2 
        v-if="title" 
        class="curTitle"
      >
        {{ title }}
      </h2>
      <button 
        v-if="openSet" 
        class="open" 
        @touchend="open"
      >
        {{ openText }}
      </button>
      <button 
        class="open" 
        @touchend="cancelSet"
      >
        {{ cancelText }}
      </button>
    </section>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'VDialog',
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    openText: {
      type: String,
      default: '显示',
    },
    closeText: {
      type: String,
      default: '关闭',
    },
    title: {
      type: String,
      default: 'dialog-title',
    },
    closeSet: {
      type: Boolean,
      default: true,
    },
    openSet: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
  },
  data() {
    return {}
  },
  methods: {
    close() {
      // $emit 方法触发父组件的监听事件
      this.$emit('hide')
    },
    cancelSet() {
      this.$emit('cancel')
    },
    open() {
      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss" scoped>
#moreWrap {
  // border: 1px solid #cccccc;
  width: 100%;
  height: 82%;
  position: relative;
  ul {
    padding: 0;
    margin: 0;
  }
  .topBar {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #ccc;
    .close,
    .open {
      width: 15%;
      height: 30px;
      line-height: 30px;
      border: 1px solid #ccc;
      display: inline-block;
    }
    .curTitle {
      display: inline-block;
      width: 40%;
      margin: 0 auto;
      font-weight: normal;
      font-size: 1.2rem;
    }
  }
}
</style>
