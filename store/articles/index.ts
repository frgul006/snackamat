import { Entry } from 'contentful'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { createClient } from '~/plugins/contentful'
import { Article, ArticlesState, ArticleType, RootState } from '~/types'

const client = createClient()

export const state = (): ArticlesState => ({
  articles: []
})

export const mutations: MutationTree<ArticlesState> = {
  setArticles(s, payload) {
    s.articles = payload
  }
}

export const getters: GetterTree<ArticlesState, RootState> = {
  articles(s): Array<Entry<Article>> {
    return s.articles
  },
  recipies(s): Array<Entry<Article>> {
    return s.articles.filter(a =>
      a.fields.types.some(t => t === ArticleType.RECIPE)
    )
  }
}

export const actions: ActionTree<ArticlesState, RootState> = {
  async getArticles({ commit }) {
    const response = await client.getEntries<Article>({
      content_type: 'article',
      order: '-fields.publishedAt'
    })
    if (response.items.length > 0) {
      commit('setArticles', response.items)
    }
  }
}
