import { Entry } from 'contentful'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { createClient } from '~/plugins/contentful'
import { Article, ArticleState, RootState } from '~/types'

const client = createClient()

export const state = (): ArticleState => ({
  currentArticle: undefined
})

export const mutations: MutationTree<ArticleState> = {
  setCurrentArticle(s, payload: Entry<Article>) {
    s.currentArticle = payload
  }
}

export const getters: GetterTree<ArticleState, RootState> = {
  currentArticle(s): Entry<Article> | undefined {
    return s.currentArticle
  }
}

export const actions: ActionTree<ArticleState, ArticleState> = {
  async getArticleBySlug({ commit }, slug) {
    const response = await client.getEntries<Article>({
      content_type: 'article',
      'fields.slug': slug
    })
    commit('setCurrentArticle', response.items[0])
  }
}
