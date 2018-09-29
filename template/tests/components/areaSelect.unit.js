// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import DialogContent from '@components/index/AreaSelect.vue'
describe('DialogContent', () => {
  const dialogContent = mount(DialogContent, {
    propsData: {
      defaultOptions: [302010301017, 303010201001, 302010301010],
      items: {
        全国: [
          { name: '景点', id: '300000006000' },
          { name: '大学校园', id: '300000004000' },
          { name: '商场', id: '300000003000' },
        ],
        上海: [
          { name: '徐家汇', id: '303010201001' },
          { name: '丁香花园', id: '303010201005' },
          { name: '外滩', id: '303010101001' },
        ],
        北京: [
          { name: '三里屯', id: '302010301017' },
          { name: '望京', id: '302010301010' },
          { name: '国贸', id: '302010301015' },
          { name: '朝外大街', id: '302010301003' },
        ],
        重庆: [
          { name: '观音桥', id: 318010501002 },
          { name: '解放碑', id: 318010301001 },
        ],
      },
    },
  })

  it('[dialogContent]--回填值渲染---正常', () => {
    let len = dialogContent.props().defaultOptions.length
    expect(dialogContent.vm._data.renderSelectIds.length).toBe(len)
  })

  it('[dialogContent]--变更回填值---数据及渲染正常', () => {
    dialogContent.props().defaultOptions = [302010301015]
    let len = dialogContent.props().defaultOptions.length
    expect(dialogContent.vm._data.renderSelectIds.length).toBe(len)
  })

  it('[dialogContent]--选择标签--选中---正常', () => {
    let item = { name: '景点', id: '300000006000' }
    dialogContent.vm._data.curKey = '全国'
    dialogContent.vm.handleSelect(item)
    expect(
      dialogContent.vm._data.selectedOptions['全国'].includes(300000006000)
    ).toBe(true)
  })

  it('[dialogContent]--选择标签--取消选中---正常', () => {
    let item = { name: '三里屯', id: '302010301017' }
    dialogContent.vm.handleSelect(item)
    expect(
      dialogContent.vm._data.selectedOptions['全国'].includes(302010301017)
    ).toBe(false)
  })

  it('[dialogContent]--全选事件--全选---正常', () => {
    dialogContent.vm._data.isAll['全国'] = true
    dialogContent.vm.handleCheckAll('全国')
    let len = dialogContent.vm._data.selectedOptions['全国'].length
    expect(len).toBe(3)
  })

  it('[dialogContent]--全选事件--取消全选---正常', () => {
    dialogContent.vm._data.isAll['上海'] = false
    dialogContent.vm.handleCheckAll('上海')
    let len = dialogContent.vm._data.selectedOptions['上海'].length
    expect(len).toBe(0)
  })

  it('[dialogContent]--处于全选状态--选择某个标签使之变更为非全选---正常', () => {
    dialogContent.vm._data.isAll['上海'] = true
    dialogContent.vm.handleCheckAll('上海')
    let len = dialogContent.vm._data.selectedOptions['上海'].length
    expect(len).toBe(3)
    let item = { name: '丁香花园', id: '303010201005' }
    dialogContent.vm._data.curKey = '上海'
    dialogContent.vm.handleSelect(item)
    expect(dialogContent.vm._data.isAll['上海']).toBe(false)
  })

  it('[dialogContent]--撤销未提交的本次操作---正常', () => {
    let selectOne = [
      { name: '观音桥', id: 318010501002 },
      { name: '外滩', id: '303010101001' },
    ]
    dialogContent.vm._data.curKey = '上海'
    selectOne.forEach(ele => {
      dialogContent.vm.handleSelect(ele)
    })
    expect(
      dialogContent.vm._data.renderSelectIds.includes(318010501002) &&
        dialogContent.vm._data.renderSelectIds.includes(303010201001)
    ).toBe(true)
    dialogContent.vm.handleCancel()
    expect(
      dialogContent.vm._data.renderSelectIds.includes(318010501002) &&
        dialogContent.vm._data.renderSelectIds.includes(303010201001)
    ).toBe(false)
  })

  it('[dialogContent]--选中值有变化均将选中值派发给其父组件---正常', () => {
    let ele = { name: '朝外大街', id: '302010301003' }
    dialogContent.vm._data.curKey = '北京'
    dialogContent.vm.handleSelect(ele)
    expect(
      dialogContent.vm._data.selectedOptions['北京'].includes(302010301003)
    ).toBe(true)
  })

  it('[dialogContent]--切换右侧tab标题栏---正常', () => {
    dialogContent.vm.handleShowCurTab('重庆')
    expect(dialogContent.vm._data.curKey).toEqual('重庆')
  })
})
