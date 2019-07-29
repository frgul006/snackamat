import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import ArticlePreview from '~/components/ArticlePreview.vue'

describe('ArticlePreview', () => {
  Vue.use(Vuetify)
  Vue.filter('moment', () => 'foo')

  test('is a Vue instance', () => {
    const wrapper = shallowMount(ArticlePreview, {
      propsData: {
        article: {
          fields: {
            slug: '',
            title: '',
            summary: '',
            publishedAt: new Date(),
            image: {
              fields: {
                file: {
                  url: ''
                }
              }
            }
          }
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
