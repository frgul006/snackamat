import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { createClient } from '~/plugins/contentful'
import { Article, ArticleState, RootState } from '~/types'

const client = createClient()

export const state = (): ArticleState => ({
  currentArticle: undefined
})

export const mutations: MutationTree<ArticleState> = {
  setCurrentArticle(state, payload) {
    state.currentArticle = payload
  }
}

export const getters: GetterTree<ArticleState, RootState> = {
  currentArticle(state): Article | undefined {
    return state.currentArticle
  }
}

export const actions: ActionTree<ArticleState, ArticleState> = {
  async getArticleBySlug({ commit }, slug) {
    const response = await client.getEntries({
      content_type: 'article',
      'fields.slug': slug
    })
    commit('setCurrentArticle', response.items[0])
  }
}
