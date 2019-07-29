import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { createClient } from '~/plugins/contentful'
import { Article, ArticleType, ArticlesState, RootState } from '~/types'

const client = createClient()

export const state = (): ArticlesState => ({
  articles: []
})

export const mutations: MutationTree<ArticlesState> = {
  setArticles(state, payload) {
    state.articles = payload
  }
}

export const getters: GetterTree<ArticlesState, RootState> = {
  articles(state): Article[] {
    return state.articles
  },
  recipies(state): Article[] {
    return state.articles.filter(a =>
      a.fields.types.some(t => t === ArticleType.RECIPE)
    )
  }
}

export const actions: ActionTree<ArticlesState, RootState> = {
  async getArticles({ commit }) {
    const response = await client.getEntries({
      content_type: 'article',
      order: '-fields.publishedAt'
    })
    if (response.items.length > 0) {
      commit('setArticles', response.items)
    }
  }
}
