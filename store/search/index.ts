import { Entry } from 'contentful'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { createClient } from '~/plugins/contentful'
import { Article, RootState, SearchState } from '~/types'

const client = createClient()

export const state = (): SearchState => ({
  results: [],
  filter: '',
  isSearching: false,
  hasSearched: false
})

export const mutations: MutationTree<SearchState> = {
  setFilter(s, payload: string) {
    s.filter = payload
  },
  setResults(s, payload: Array<Entry<Article>>) {
    s.results = payload
  },
  setIsSearching(s, payload: boolean) {
    s.isSearching = payload
  },
  setHasSearched(s, payload: boolean) {
    s.hasSearched = payload
  }
}

export const getters: GetterTree<SearchState, RootState> = {
  results(s): Array<Entry<Article>> {
    return s.results
  },
  filter(s): string {
    return s.filter
  },
  isSearching(s): boolean {
    return s.isSearching
  },
  hasSearched(s): boolean {
    return s.hasSearched
  }
}

export const actions: ActionTree<SearchState, RootState> = {
  async search({ commit }, filter) {
    commit('setFilter', filter)
    commit('setIsSearching', true)

    const response = await client.getEntries<Article>({
      content_type: 'article',
      order: '-fields.publishedAt',
      query: filter
    })
    commit('setResults', response.items)
    commit('setIsSearching', false)
    commit('setHasSearched', true)
  }
}
