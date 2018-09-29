<template>
  <div id="scale">
    <canvas
      id="canvas"
      ref="canvas"
      height="80px"
      @touchstart="start"
    />
    <div class="line" />
  </div>
</template>
<script>
export default {
  props: {
    // 最小刻度值
    min: {
      type: Number,
      default: 0,
    },
    // 最大刻度值
    max: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    // 步长
    step: {
      type: Number,
      default: 10,
    },
    // 刻度尺绘制数量的一半
    markLength: {
      type: Number,
      default: 150,
    },
  },
  data() {
    return {
      // 默认选择值
      default: 0,
      // 此次滑动开始时触摸点初始x坐标
      touchInitX: 0,
      // 上次活动位置
      lastPos: 0,
      // 是否滑动中
      sliding: false,
      screenWidth: 0,
      // draw函数去抖
      lastTimeout: null,
      // 当前分段渲染中心刻度index
      currentSegment: 0,
      // anvas的实际渲染倍率
      ratio: 1,
    }
  },
  computed: {
    // 基于步长格式化的 最小值（向上取整）
    formatMin() {
      return this.min % this.step === 0
        ? this.min
        : Math.ceil(this.min / this.step) * this.step
    },
    // 基于步长格式化的 最小值（向下取整）
    formatMax() {
      return this.max % this.step === 0
        ? this.max
        : Math.floor(this.max / this.step) * this.step
    },
    // 最小值所在坐标
    coordinateMin() {
      return this.screenWidth / 2
    },
    // 最大值所在坐标
    coordinateMax() {
      return this.screenWidth / 2 - this.markLength * 2 * 7
    },
    // 当前坐标轴开始坐标
    axisStartIndex() {
      return this.currentSegment - this.markLength < 0
        ? 0
        : this.currentSegment - this.markLength
    },
  },
  watch: {
    step() {
      this.debounce(50, this.draw)()
      this.initScale()
    },
    max() {
      this.debounce(50, this.draw)()
      this.initScale()
    },
    min() {
      this.debounce(50, this.draw)()
      this.initScale()
    },
    value(currentValue) {
      if (this.sliding !== true) {
        this.setPosition(currentValue)
      }
    },
  },
  mounted() {
    this.screenWidth = document.documentElement.clientWidth
    this.getRatio()
    this.draw()
    this.initScale()
  },
  methods: {
    // 获取anvas的实际渲染倍率
    getRatio() {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      // 屏幕的设备像素比
      let devicePixelRatio = window.devicePixelRatio || 1
      // 浏览器在渲染canvas之前存储画布信息的像素比
      var backingStoreRatio =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1
      this.ratio = devicePixelRatio / backingStoreRatio
    },
    // 获取经过倍率计算的长度单位
    pxRatio(px) {
      return px * this.ratio
    },
    // 绘制刻度尺
    draw() {
      let canvas = document.getElementById('canvas')
      canvas.setAttribute(
        'width',
        `${(this.markLength * 2 + 1) * 7 * this.ratio}px`
      )
      canvas.setAttribute('height', `${80 * this.ratio}px`)
      canvas.style.width = `${(this.markLength * 2 + 1) * 7}px`
      canvas.style.height = '80px'
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#CCCCCC'
      ctx.lineWidth = `${this.ratio}`
      ctx.fillStyle = '#CCCCCC'
      ctx.textAlign = 'center'
      ctx.font = `${12 *
        this.ratio}px PingFangSC-Regular,Avenir,Helvetica,Arial,sans-serif`
      // 刻度尺最长刻度数量
      let max = (this.formatMax - this.formatMin) / this.step + 1
      // 绘制区域起点
      let start = this.formatMinMax(
        this.currentSegment - this.markLength,
        0,
        max
      )
      // 绘制区域终点
      let end = this.formatMinMax(this.currentSegment + this.markLength, 0, max)
      // 获得一个长度为刻度尺刻度个数的index数组
      for (let i = 0; i < end - start; i++) {
        ctx.moveTo(this.pxRatio(i * 7), this.pxRatio(80))
        if (
          ((i * this.step + this.formatMin + this.axisStartIndex * this.step) /
            this.step) %
          10 !==
          0
        ) {
          ctx.lineTo(this.pxRatio(i * 7), this.pxRatio(80 - 16))
        } else {
          ctx.lineTo(this.pxRatio(i * 7), this.pxRatio(80 - 32))
          ctx.fillText(
            (i + start) * this.step + this.formatMin,
            this.pxRatio(i * 7),
            this.pxRatio(80 - 32 - 16)
          )
        }
      }
      // 绘制底部的细线
      ctx.stroke()
      ctx.beginPath()
      ctx.strokeStyle = '#E9E9E9'
      ctx.moveTo(0, this.pxRatio(80))
      ctx.lineTo((this.markLength * 2 + 1) * 7 * this.ratio, this.pxRatio(80))
      ctx.stroke()
    },
    start(evt) {
      //  绑定事件
      evt.preventDefault()
      this.$refs.canvas.addEventListener('touchmove', this.handleMove, true)
      this.$refs.canvas.addEventListener('touchend', this.handleEnd, true)
      this.touchInitX = evt.targetTouches[0].clientX
      this.sliding = true
    },
    handleMove(evt) {
      // console.log('move')
      evt.preventDefault()
      // 移动距离
      let distance = evt.targetTouches[0].clientX - this.touchInitX
      this.lastPos = this.changeValue(this.lastPos + distance)
      this.touchInitX = evt.targetTouches[0].clientX
    },
    handleEnd(evt) {
      evt.preventDefault()
      // 滑动step
      this.setPosition(this.value)
      this.$refs.canvas.removeEventListener('touchMove', this.handleMove, true)
      this.$refs.canvas.removeEventListener('touchEnd', this.handleEnd, true)
      this.sliding = false
    },
    changeValue(coordinate) {
      let currentValue = this.coordinate2value(coordinate)
      this.$emit('input', currentValue)
      // 当前刻度索引值
      let currentIndex = this.coordinate2index(coordinate)
      console.log(currentIndex)
      // 重绘
      if (currentIndex > this.currentSegment + this.markLength - 30) {
        this.currentSegment = currentIndex
        this.draw()
        this.$refs.canvas.style.transform = `translateX(${this.currentIndex2coordinate(
          this.currentSegment
        )}px)`
        return this.currentIndex2coordinate(this.currentSegment)
      } else if (currentIndex < this.currentSegment - (this.markLength - 30)) {
        this.currentSegment = currentIndex
        this.draw()
        this.$refs.canvas.style.transform = `translateX(${this.currentIndex2coordinate(
          this.currentSegment
        )}px)`
        return this.currentIndex2coordinate(this.currentSegment)
      } else {
        this.$refs.canvas.style.transform = `translateX(${coordinate}px)`
        return coordinate
      }
    },
    // 初始化初始值滑动条位置
    initScale() {
      let initValue =
        this.value % this.step === 0
          ? this.value
          : Math.ceil(this.value / this.step) * this.step
      initValue = this.formatMinMax(initValue, this.formatMin, this.formatMax)
      this.setPosition(initValue)
      this.$emit('input', initValue)
    },
    // 根据value 设置刻度尺偏移量
    setPosition(currentValue) {
      currentValue = this.formatMinMax(
        currentValue,
        this.formatMin,
        this.formatMax
      )
      if (!this.sliding) {
        let currentIndex = this.value2Index(currentValue)
        if (currentIndex > this.currentSegment + this.markLength - 30) {
          this.currentSegment = currentIndex
          this.draw()
          this.$refs.canvas.style.transform = `translateX(${this.currentIndex2coordinate(
            this.currentSegment
          )}px)`
          this.lastPos = this.currentIndex2coordinate(this.currentSegment)
        } else if (
          currentIndex <
          this.currentSegment - (this.markLength - 30)
        ) {
          this.currentSegment = currentIndex
          this.draw()
          this.$refs.canvas.style.transform = `translateX(${this.currentIndex2coordinate(
            this.currentSegment
          )}px)`
          this.lastPos = this.currentIndex2coordinate(this.currentSegment)
        } else {
          this.$refs.canvas.style.transform = `translateX(${this.value2coordinate(
            currentValue
          )}px)`
          this.lastPos = this.value2coordinate(currentValue)
        }
      } else {
        this.$refs.canvas.style.transform = `translateX(${this.value2coordinate(
          currentValue
        )}px)`
        this.lastPos = this.value2coordinate(currentValue)
      }
    },
    // 根据value计算刻度尺坐标
    value2coordinate(value) {
      return (
        this.screenWidth / 2 -
        ((value - this.formatMin) / this.step) * 7 +
        this.axisStartIndex * 7
      )
    },
    value2Index(value) {
      return (value - this.formatMin) / this.step
    },
    // 根据刻度尺坐标计算value
    coordinate2value(coordinate) {
      return (
        Math.round((this.screenWidth / 2 - coordinate) / 7) * this.step +
        this.formatMin +
        this.axisStartIndex * this.step
      )
    },
    // 根据刻度尺坐标计算刻度尺索引值
    coordinate2index(coordinate) {
      return (
        Math.round((this.screenWidth / 2 - coordinate) / 7) +
        this.axisStartIndex
      )
    },
    // 根据刻度尺索引值计算刻度尺坐标
    currentIndex2coordinate(index) {
      return -((index > 150 ? 150 : index) * 7) + this.screenWidth / 2
    },
    // 根据最大最小值返回
    formatMinMax(val, min, max) {
      if (val < min) {
        return min
      } else if (val > max) {
        return max
      } else {
        return val
      }
    },
    // 函数去抖
    debounce(idle, action, module) {
      return () => {
        let ctx = this
        let args = arguments
        clearTimeout(this.lastTimeout)
        this.lastTimeout = setTimeout(() => {
          action.apply(ctx, args)
        }, idle)
      }
    },
  },
}
</script>
<style lang="scss">
#scale {
  height: 80px;
  width: 100vw;
  position: relative;
  overflow: hidden;
}
.line {
  width: 1px;
  height: 80px;
  position: absolute;
  left: 50vw;
  top: 0;
  background-color: #ff8200;
}
#canvas {
  position: absolute;
  bottom: 0;
}
</style>
