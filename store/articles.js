import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export const state = () => ({
  articles: []
})

export const mutations = {
  setArticles(state, payload) {
    state.articles = payload
  }
}

export const actions = {
  async getArticles({ commit }) {
    const response = await client.getEntries({
      content_type: 'article',
      order: '-fields.publishedAt',
      select:
        'sys.id,fields.title,fields.slug,fields.summary,fields.image,fields.publishedAt'
    })
    if (response.items.length > 0) {
      commit('setArticles', response.items)
    }
  }
}
