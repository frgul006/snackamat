<template>
  <v-container>
    <v-layout>
      <div class="snackamat-search">
        <h2 class="sr-only">Sök bland artiklar</h2>
        <v-text-field
          v-model="searchTxt"
          @keydown="debouncedSearch"
          outlined
          rounded
          solo
          clearable
          append-icon="search"
        ></v-text-field>
        <div v-if="isSearching">
          <Spinner></Spinner>
        </div>
        <div v-if="!isSearching && results.length === 0">Inga träffar.</div>
        <v-container grid-list-lg v-if="!isSearching && results.length > 0">
          <v-layout wrap>
            <v-flex sm4 v-for="article in results" :key="article.sys.id">
              <ArticlePreview :article="article"></ArticlePreview>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
@import '~/assets/style/_mixins.scss';

.snackamat-search {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Action, Getter, namespace } from 'vuex-class'
import { Entry } from 'contentful'
import { Article } from '~/types'
import * as _ from 'lodash'

import ArticlePreview from '~/components/ArticlePreview.vue'
import Spinner from '~/components/Spinner.vue'

const search = namespace('search')

@Component({
  components: {
    ArticlePreview,
    Spinner
  }
})
export default class Index extends Vue {
  searchTxt: string = ''
  debouncedSearch = _.debounce(this.search, 300)

  @search.Getter('isSearching') isSearching!: boolean
  @search.Getter('results') results!: Array<Entry<Article>>

  beforeRouteUpdate(to, from, next) {
    this.updateComponent(to.query.q ? (to.query.q as string) : '')
    next()
  }

  mounted() {
    this.updateComponent(
      this.$route.query.q ? (this.$route.query.q as string) : ''
    )
  }

  updateComponent(searchTxt: string) {
    this.searchTxt = searchTxt

    if (this.searchTxt && this.searchTxt !== '') {
      this.$store.dispatch('search/search', this.searchTxt)
    }
  }

  search(e) {
    this.$router.push({ path: 'artiklar', query: { q: e.target.value } })
    this.$store.dispatch('search/search', e.target.value)
  }

  head() {
    let canonical = `https://snackamat.se${this.$route.path}/`

    return {
      title: 'Sök',
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
