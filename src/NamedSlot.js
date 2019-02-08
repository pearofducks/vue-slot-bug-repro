export default {
  name: 'NamedSlot',
  render(h) {
    const children = []
    // eslint-disable-next-line
    console.log("FOO SHOULD EXIST", this.$slots.foo)
    if (this.$slots.foo) children.push(this.$slots.foo)
    return h('div', { staticClass: 'bar' }, children)
  }
}
