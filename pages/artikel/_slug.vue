<template>
  <v-container>
    <v-layout>
      <div class="snackamat-article">
        <div class="snackamat-article__img">
          <v-img
            :alt="article.fields.image.fields.description"
            :src="article.fields.image.fields.file.url + '?w=414&h=138&fit=fill&q=25'"
            :srcset="
              `${article.fields.image.fields.file.url}?w=900&h=300&fit=fill&q=75 900w, 
               ${article.fields.image.fields.file.url}?w=1137&h=384&fit=fill&q=75 1137w, 
               ${article.fields.image.fields.file.url}?w=1737&h=564&fit=fill&q=75 1737w`"
            :lazy-src="article.fields.image.fields.file.url + '?fm=jpg&fl=progressive&w=414&h=138&fit=fill&q=25'"
            :aspect-ratio="10/3"
            sizes="
                (min-width: 1904px) 1737px,
                (min-width: 1264px) 1137px, 
                (min-width: 960px) 900px, 
                100vw"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <Spinner></Spinner>
              </v-layout>
            </template>
          </v-img>
        </div>
        <div class="snackamat-article__header">
          <h2>{{ article.fields.title }}</h2>
        </div>
        <main class="snackamat-article__content" v-html="richTextHtml"></main>
        <div class="snackamat-article__metadata">
          <div class="snackamat-article__cuisines" v-if="article.fields.cuisines.length > 0">
            <h3 class="sr-only">Kök</h3>
            <ul>
              <li v-for="cuisine in article.fields.cuisines" :key="cuisine">
                <v-chip large color="primary">{{cuisine}}</v-chip>
              </li>
            </ul>
          </div>
          <div class="snackamat-article__methods" v-if="article.fields.methods.length > 0">
            <h3 class="sr-only">Matlagningsmetoder</h3>
            <ul>
              <li v-for="method in article.fields.methods" :key="method">
                <v-chip large color="secondary">{{method}}</v-chip>
              </li>
            </ul>
          </div>
          <div class="snackamat-article__diets" v-if="article.fields.diets.length > 0">
            <h3 class="sr-only">Dieter</h3>
            <ul>
              <li v-for="diet in article.fields.diets" :key="diet">
                <v-chip large color="success">{{diet}}</v-chip>
              </li>
            </ul>
          </div>
        </div>
        <div class="snackamat-article__related-articles" v-if="article.fields.relatedArticles">
          <h3 class="sr-only">Relaterade artiklar</h3>
          <v-container grid-list-lg>
            <v-layout wrap>
              <v-flex
                sm4
                v-for="relatedArticle in article.fields.relatedArticles"
                :key="relatedArticle.sys.id"
              >
                <ArticlePreview :article="relatedArticle"></ArticlePreview>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
@import '~/assets/style/_mixins.scss';

.snackamat-article {
  flex-grow: 1;

  &__img {
    margin-bottom: 1rem;
    margin-left: -16px;
    margin-right: -16px;
    margin-top: -16px;

    @include lg {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    }
  }

  &__content {
    h1,
    h2,
    h3 {
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

  &__related-articles {
    .container {
      padding: 0;
    }
  }

  &__metadata {
    margin-bottom: 2rem;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0.5rem;
    }

    .v-chip__content {
      font-weight: 500;
    }

    .v-chip.secondary {
      color: #fff;
    }
  }
}
</style>

<script lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Component, Vue } from 'nuxt-property-decorator'
import { State, namespace } from 'vuex-class'
import { Article } from '~/types'
import { MetaService } from '~/services'
import { Entry } from 'contentful'
import Spinner from '~/components/Spinner.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'

const article = namespace('article')

@Component({
  components: {
    ArticlePreview,
    Spinner
  }
})
export default class Slug extends Vue {
  @article.Getter('currentArticle') article!: Entry<Article>

  head() {
    let canonical = `https://snackamat.se${this.$route.path}/`

    return {
      title: this.article.fields.title,
      meta: MetaService.getMetaForArticle(this.article),
      link: [{ rel: 'canonical', href: canonical }]
    }
  }

  async fetch({ store, params }) {
    await store.dispatch('article/getArticleBySlug', params.slug)
  }

  get richTextHtml(): string {
    return documentToHtmlString(this.article.fields.content)
  }
}
</script>
