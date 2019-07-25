<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex sm4 v-for="article in articles" :key="article.sys.id">
        <ArticlePreview :article="article"></ArticlePreview>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ArticlePreview from '~/components/ArticlePreview.vue'

export default {
  head: {
    title: 'start',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'snackamat.se is a site dedicated to food.'
      }
    ]
  },
  components: { ArticlePreview },
  computed: {
    articles() {
      return this.$store.state.articles.articles
    }
  }
}
</script>
