import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export const state = () => ({
  currentArticle: {}
})

export const mutations = {
  setCurrentArticle(state, payload) {
    state.currentArticle = payload
  }
}

export const actions = {
  async getArticleBySlug({ commit }, slug) {
    const response = await client.getEntries({
      content_type: 'article',
      'fields.slug': slug
    })
    commit('setCurrentArticle', response.items[0])
  }
}
