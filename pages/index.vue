<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-flex xs8>
          <ArticlePreview :article="article" v-for="article in articles" :key="article.sys.id"></ArticlePreview>
        </v-flex>
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
