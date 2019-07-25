import Header from '@/components/Header.vue'
import { RouterLinkStub, shallowMount } from '@vue/test-utils'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
