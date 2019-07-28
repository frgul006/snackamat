<template>
  <v-container>
    <v-layout>
      <div v-if="article" class="snackamat-article">
        <div class="snackamat-article__img">
          <v-img :aspect-ratio="10/3" :src="article.fields.image.fields.file.url + '?fit=scale&w=350&h=120'" :srcset="`${article.fields.image.fields.file.url}?w=350&h=120&fit=fill&q=75 350w, ${article.fields.image.fields.file.url}?w=1000&h=300&fit=fill&q=75 1000w, ${article.fields.image.fields.file.url}?w=2000&h=600&fit=fill&q=75 2000w`" sizes="(min-width: 1024px) 400px, 100vw">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </div>
        <div class="snackamat-article__header">
          <h1>
            {{ article.fields.title }}
          </h1>
        </div>
        <main class="snackamat-article__content" v-html="richTextHtml"></main>
      </div>
      <div v-else>
        <h1>404</h1>
        <p>This page could not be found.</p>
      </div>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
.snackamat-article {
  flex-grow: 1;

  &__img {
    margin-bottom: 1rem;
    margin-left: -72px;
    margin-right: -72px;
    margin-top: -48px;

    @media only screen and (max-width: 959px) {
      margin-left: -16px;
      margin-right: -16px;
      margin-top: -16px;
    }
  }

  h1,
  h2 {
    padding-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  ul,
  ol,
  p {
    margin-bottom: 1rem;
  }

  ul > li > p,
  ol > li > p {
    margin: 0;
  }
}
</style>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  head() {
    return {
      title: this.$store.state.article.currentArticle.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.article.currentArticle.fields.summary
        }
      ]
    }
  },
  components: {},
  computed: {
    article() {
      return this.$store.state.article.currentArticle
    },
    richTextHtml() {
      return documentToHtmlString(
        this.$store.state.article.currentArticle.fields.content
      )
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('article/getArticleBySlug', params.slug)
  }
}
</script>
