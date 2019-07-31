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
        <div
          v-if="isSearching || !hasSearched"
          class="snackamat-search__searching"
        >
          <Spinner :size="'100px'"></Spinner>
        </div>
        <div
          v-if="!isSearching && hasSearched && results.length === 0"
          class="snackamat-search__no-results"
        >
          <div class="snackamat-no-results">
            <div class="snackamat-no-results__icon">
              <v-icon color="warning">mdi-alert-box-outline</v-icon>
            </div>
            <div class="snackamat-no-results__text">Inga träffar.</div>
          </div>
        </div>
        <v-container
          class="snackamat-search__results-container"
          grid-list-lg
          v-if="!isSearching && results.length > 0"
        >
          <v-layout wrap>
            <v-flex v-for="article in results" :key="article.sys.id">
              <SearchResult :article="article"></SearchResult>
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
  max-width: 900px;

  &__searching,
  &__no-results {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  &__results-container {
    padding: 0;
  }
}

.snackamat-no-results {
  &__icon {
    > i {
      font-size: 20vw;
    }
  }
}
</style>

<script lang="ts">
import { Entry } from 'contentful'
import * as _ from 'lodash'
import { Component, Vue } from 'nuxt-property-decorator'
import { Action, Getter, namespace, State } from 'vuex-class'
import { Article } from '~/types'

import SearchResult from '~/components/SearchResult.vue'
import Spinner from '~/components/Spinner.vue'

const search = namespace('search')

@Component({
  components: {
    SearchResult,
    Spinner
  }
})
export default class Index extends Vue {
  public searchTxt: string = ''
  public debouncedSearch = _.debounce(this.search, 300)

  @search.Getter('hasSearched') public hasSearched!: boolean
  @search.Getter('isSearching') public isSearching!: boolean
  @search.Getter('results') public results!: Array<Entry<Article>>

  public beforeRouteUpdate(to, from, next) {
    this.updateComponent(to.query.q ? (to.query.q as string) : '')
    next()
  }

  public mounted() {
    this.updateComponent(
      this.$route.query.q ? (this.$route.query.q as string) : ''
    )
  }

  public updateComponent(searchTxt: string) {
    this.searchTxt = searchTxt

    if (this.searchTxt && this.searchTxt !== '') {
      this.$store.dispatch('search/search', this.searchTxt)
    }
  }

  public search(e) {
    this.$router.push({ path: 'artiklar', query: { q: e.target.value } })
    this.$store.dispatch('search/search', e.target.value)
  }

  public head() {
    const canonical = `https://snackamat.se${this.$route.path}/`

    return {
      title: 'Sök',
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
