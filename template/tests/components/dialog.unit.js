// Import the mount() method from the test utils
// and the component you want to test
import { mount, shallowMount } from '@vue/test-utils'
import Dialog from '@components/index/Dialog.vue'
import AreaSelect from '@components/index/AreaSelect.vue'
import App from '@modules/index/App.vue'
describe('Dialog', () => {
  const app = mount(App)
  const dialog = app.find(Dialog)

  it('[Dialog]--初始化', () => {
    const buttons = dialog.findAll('button')
    expect(buttons.length).toBe(3)
  })

  it('[Dialog]--组件间传递props---正常', () => {
    expect(dialog.props().openText).toBe('完成')
    expect(dialog.props().isShow).toBe(true)
    expect(dialog.props().closeText).toBe('关闭')
    expect(dialog.props().title).toBe('dialog-title')
    expect(dialog.props().closeSet).toBe(true)
  })

  it('[Dialog]--关闭弹窗事件---正常调用', () => {
    dialog.vm.close()
    expect(dialog.props().isShow).toBe(false)
  })

  it('[Dialog]--打开弹窗事件---正常调用', () => {
    dialog.vm.open()
    expect(dialog.props().isShow).toBe(true)
  })

  it('[Dialog]--插槽slot---正常', () => {
    const dialog = shallowMount(Dialog, {
      slots: {
        default: [],
        AreaSelect: AreaSelect,
      },
    })
    expect(dialog.find('.dialog-main')).toBeTruthy()
  })
})
