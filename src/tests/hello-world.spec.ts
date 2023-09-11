import { expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld.vue'

test('mount component', async () => {
  expect(HelloWorld).toBeTruthy()
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Test Hello World'
    }
  })
  expect(wrapper).toBeTruthy()
  expect(wrapper.text()).toContain('Test Hello World')

  const button = wrapper.get('button')
  await button.trigger('click')
  expect(button.text()).toEqual('count is 1')
  await button.trigger('click')
  expect(button.text()).toEqual('count is 2')
})
