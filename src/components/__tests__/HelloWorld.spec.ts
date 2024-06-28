import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('Home', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Welcome to Draniki.nl' } })
    expect(wrapper.text()).toContain('Welcome to Draniki.nl')
  })
})
