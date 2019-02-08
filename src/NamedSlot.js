export default {
  name: 'NamedSlot',
  render(h) {
    const children = []
    // eslint-disable-next-line
    console.log("FOO SHOULD EXIST", this.$scopedSlots.foo)
    if (this.$scopedSlots.foo) children.push(this.$scopedSlots.foo)
    return h('div', { staticClass: 'bar' }, children)
  }
}
