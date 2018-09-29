import Toast from '@components/index/Toast'

describe.only('@components/index/Toast', () => {
  it('renders its content', () => {
    // const slotContent = '<span>foo</span>'
    // const { element } = shallowMount(BaseButton, {
    //   slots: {
    //     default: slotContent,
    //   },
    // })
    // expect(element.innerHTML).toContain(slotContent)
    const wrapper = shallowMount(Toast, { propsData: { content: 'test' } })
    const TextDiv = wrapper.find('.contant').element
    expect(TextDiv.textContent.trim()).toBe('test')
  })
})
