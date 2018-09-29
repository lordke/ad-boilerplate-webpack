<template>
  <section 
    v-show="show" 
    class="dialogMain"
  >
    <div class="mainWrapper">
      <ul class="tabs">
        <li 
          v-for="(tabKey, i) in tabNames" 
          :key="i"
          :class="{'active': tabKey === curKey}" 
          @touchend="handleShowCurTab(tabKey)"
        >
          {{ tabKey }}
          <span 
            v-if="selectedOptions[tabKey].length > 0 && tabStyle"
            :class="selectedOptions[tabKey].length === clearItems[tabKey].length
            ? 'countGreen' : selectedOptions[tabKey].length > 0 ? 'countRed' : ''"
          > 
            {{ selectedOptions[tabKey].length }}
          </span>
        </li>
      </ul>
      <ul class="tabsMain">
        <li class="tabsTitle">
          <h3>{{ tabsTitle }}</h3>
          <span class="allSelect">
            <input 
              v-model.lazy="isAll[curKey]" 
              type="checkbox" 
              name="select" 
              @change="handleCheckAll(curKey)"
            > 
            <label for="allOptions">
              全选
            </label>
          </span>
        </li>
        <li 
          v-for="(value, index) in items[curKey]"
          :key="index"
          :class="{'selected': !value.disabled && renderSelectIds.includes(+value.id), 'disabled': value.disabled}"
          @touchend="handleSelect(value)"
        >
          {{ value.name }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AreaSelect',
  props: {
    // 初始化的数据
    items: {
      type: Object,
      default() {
        return {}
      },
    },
    // 左边侧栏是否需要显示所选中数量style
    tabStyle: {
      type: Boolean,
      default: true,
    },
    // 返回的数据类型，但是均只返回id
    backIsObject: {
      type: Boolean,
      default: false,
    },
    // 回填值
    defaultOptions: {
      type: Array,
      default() {
        return []
      },
    },
    // 控制显示弹层内容
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      tabNames: [],
      curKey: '',
      tabsTitle: '',
      allTabs: [],
      eachTabs: {},
      selectedOptions: {},
      submitResult: {},
      isAll: {},
      renderSelectIds: [], // 用来该组件渲染的id
      clearIds: [],
      flag: false, // 是否触发全选操作
    }
  },
  computed: {
    // 清除不可选项
    clearItems() {
      let obj = {}
      let vm = this
      for (let item in vm.$props.items) {
        obj[item] = vm.$props.items[item].filter(i => {
          return !i.disabled || i.disabled !== 1
        })
      }
      return obj
    },

    // 获取所有次数所选中的id
    selectedIds() {
      let vm = this
      let arr = []
      for (let idx in vm.selectedOptions) {
        vm.selectedOptions[idx].forEach(ele => {
          if (arr.indexOf(ele) < 0) {
            arr.push(ele)
          }
        })
      }
      return arr
    },

    // 每次选择的id(包括取消已经选中的id--clearIds), 去除回填的id
    curTimeSelectIds() {
      let vm = this
      let curArr = []
      for (let ele in vm.selectedOptions) {
        let chooseArr = vm.selectedOptions[ele].filter(item => {
          return !vm.defaultOptions.includes(item)
        })
        curArr = [...curArr, ...chooseArr]
      }
      return [...curArr, ...vm.clearIds]
    },
  },
  watch: {
    // 被选中的标签信息
    selectedOptions: {
      handler(val) {
        let vm = this
        vm.isAll[vm.curKey] =
          val[vm.curKey].length === vm.clearItems[vm.curKey].length
        vm.$emit('on-change', vm.$props.backIsObject ? val : vm.renderSelectIds)
      },
      deep: true,
    },
    // 初始化的选中值
    defaultOptions: {
      handler(val) {
        let vm = this
        for (let eachTab in vm.items) {
          vm.items[eachTab].forEach(ele => {
            if (
              val.includes(+ele.id) &&
              !vm.selectedOptions[eachTab].includes(+ele.id)
            ) {
              vm.selectedOptions[eachTab].push(+ele.id)
            }
          })
        }
      },
      deep: true,
    },

    // 侧边栏内容的切换
    curKey: {
      handler(val) {
        let vm = this
        let selectedOptions = vm.selectedOptions
        if (selectedOptions[val]) {
          vm.isAll[val] =
            selectedOptions[val].length === vm.clearItems[val].length
        }
      },
      immediate: true,
    },
  },
  mounted() {
    let vm = this

    // 获取侧边栏目的name值
    vm.tabNames = Object.keys(vm.$props.items)
    vm.tabNames.forEach(val => {
      vm.$set(vm.selectedOptions, val, [])
      vm.$set(vm.isAll, val, false)
    })
    // 初始化回填值
    for (let eachTab in vm.items) {
      vm.items[eachTab].forEach(ele => {
        if (vm.defaultOptions.includes(+ele.id)) {
          vm.selectedOptions[eachTab].push(+ele.id)
          vm.renderSelectIds.push(+ele.id)
        }
      })
    }
    // 默认选中第一个tab
    vm.handleShowCurTab(vm.tabNames[0])
  },
  methods: {
    // 根据左侧边栏值显示内容
    handleShowCurTab(key) {
      this.curKey = key
      this.tabsTitle = key
    },

    // 选择每个标签
    handleSelect(item) {
      let vm = this
      let curTabSelects = vm.selectedOptions[vm.curKey]
      if (vm.selectedIds.includes(+item.id)) {
        curTabSelects.splice(
          curTabSelects.findIndex((ele, index) => {
            return ele === +item.id
          }),
          1
        )
        vm.curTimeSelectIds.splice(
          vm.curTimeSelectIds.findIndex((val, index) => {
            return val === +item.id
          })
        )
        // clearId--存储本次取消选中的id且该Id在回填值里
        if (
          vm.clearIds.includes(+item.id) ||
          !vm.defaultOptions.includes(+item.id)
        ) {
          vm.clearIds.splice(vm.clearIds.indexOf(+item.id), 1)
        } else {
          vm.clearIds.push(+item.id)
        }
      } else {
        curTabSelects.push(+item.id)
        vm.curTimeSelectIds.push(+item.id)
      }
      vm.renderSelectIds = vm.selectedIds
    },
    // 全选按钮
    handleCheckAll(name) {
      let vm = this
      if (vm.isAll[name]) {
        for (let i of vm.clearItems[name]) {
          if (!vm.selectedOptions[name].includes(+i.id)) {
            vm.selectedOptions[name].push(+i.id)
          }
        }
      } else {
        vm.selectedOptions[name] = []
      }
      vm.renderSelectIds = vm.selectedIds
    },

    // 取消，对外暴露出取消对该弹窗的本次选择操作的方法---handleCancel
    handleCancel() {
      // 得通过default去查找对应的key值
      this.tabNames.forEach(val => {
        // 将未包含在回填值里的选中值（即本次选中值）取消选中状态
        this.selectedOptions[val] = this.selectedOptions[val].filter(i => {
          return this.defaultOptions.includes(i)
        })
        // 从每次所有的选择id中去除本次选择的id
        let arr = this.selectedIds.filter(ele => {
          return !this.curTimeSelectIds.includes(ele)
        })
        this.renderSelectIds = [...arr, ...this.clearIds]
        // 获取当前渲染的items
        let renderOptions = this.items[val].filter(item => {
          return this.renderSelectIds.includes(+item.id)
        })
        for (let curEle of renderOptions) {
          if (this.selectedOptions[val].indexOf(+curEle.id) < 0) {
            this.selectedOptions[val].push(+curEle.id)
          }
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.dialogMain {
  text-align: left;
  height: 50vh;
  .mainWrapper {
    height: 66%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    ul {
      padding: 0;
      margin: 0;
    }
    .tabs {
      width: 24%;
      height: 100%;
      display: inline-block;
      overflow: auto;
      overflow-y: scroll;
      background-color: #f6f6f6;
      list-style: none;
      li {
        background: #f6f6f6;
        width: 100%;
        box-sizing: border-box;
        height: 2.35vh;
        line-height: 2.35vh;
        border-bottom: 1px solid #e6e6e6;
        text-align: center;
        font-size: 0.32rem;
        color: #414141;
        margin: 0 auto;
        position: relative;
      }
      .active {
        background: #fff;
        border-left: 2px solid #ea6e00;
      }
      .countRed,
      .countGreen {
        display: inline-block;
        width: 1.2vh;
        height: 1.2vh;
        background: #ff8200;
        border-radius: 50%;
        position: absolute;
        right: 2px;
        top: 0;
      }
      .countGreen {
        background: green;
        font-size: 0;
        &::after {
          content: '✓';
          display: inline-block;
          font-size: 1.2rem;
        }
      }
    }
    .tabsMain {
      display: inline-block;
      list-style: none;
      width: 70%;
      height: 100%;
      overflow: auto;
      overflow-y: scroll;
      li {
        display: inline-block;
        background: #e6e6e6;
        min-width: 3.31rem;
        height: 1.33rem;
        line-height: 1.33rem;
        margin-right: 0.5rem;
        margin-bottom: 0.29rem;
        border-radius: 0.07rem;
        text-align: center;
        font-size: 0.32rem;
        color: #353535;
      }
      .tabsTitle {
        background: #fff;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        position: relative;
        h3 {
          font-weight: 400;
          font-size: 0.34rem;
          color: #939393;
        }
        span {
          position: absolute;
          right: 10px;
          top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .selected {
        color: #ff8200;
      }
      .disabled {
        pointer-events: none;
        cursor: default;
        opacity: 0.6;
      }
    }
  }
}
</style>
