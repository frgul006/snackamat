<template>
  <div>
    <v-container grid-list-lg>
      <v-layout wrap>
        <h2 class="sr-only">Artiklar</h2>
        <v-flex sm4 v-for="article in articles" :key="article.sys.id">
          <ArticlePreview :article="article"></ArticlePreview>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          <About></About>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { namespace, State } from 'vuex-class'

import About from '~/components/About.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import { Article } from '~/types'

const articles = namespace('articles')

@Component({
  components: {
    About,
    ArticlePreview
  }
})
export default class Index extends Vue {
  @articles.Getter('articles') public articles!: Article[]

  public head() {
    const canonical = `https://snackamat.se`

    return {
      title: `start`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'snackamat.se is a site dedicated to food.'
        }
      ],
      link: [{ rel: 'canonical', href: canonical }]
    }
  }

  public async fetch({ store, params }) {
    await store.dispatch('articles/getArticles')
  }

  public transition(to, from) {
    return 'slide-right'
  }
}
</script>
