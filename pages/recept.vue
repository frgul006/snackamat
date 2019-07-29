<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex sm4 v-for="article in articles" :key="article.sys.id">
        <ArticlePreview :article="article"></ArticlePreview>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, namespace } from 'vuex-class'
import { Article } from '~/types'
import ArticlePreview from '~/components/ArticlePreview.vue'

const articles = namespace('articles')

@Component({
  components: {
    ArticlePreview
  }
})
export default class Index extends Vue {
  @articles.Getter('recipies') articles!: Article[]

  head() {
    return {
      title: `start`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'snackamat.se is a site dedicated to food.'
        }
      ]
    }
  }

  async fetch({ store, params }) {
    await store.dispatch('articles/getArticles')
  }
}
</script>
