import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Header from '~/components/Header.vue'

describe('Header', () => {
  Vue.use(Vuetify)
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
