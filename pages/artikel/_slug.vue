<template>
  <v-container>
    <v-layout>
      <div class="snackamat-article">
        <div class="snackamat-article__img">
          <v-img
            :alt="article.fields.image.fields.description"
            :src="
              article.fields.image.fields.file.url +
                '?w=414&h=138&fit=fill&q=25'
            "
            :srcset="
              `${article.fields.image.fields.file.url}?w=900&h=300&fit=fill&q=75 900w,
               ${article.fields.image.fields.file.url}?w=1137&h=384&fit=fill&q=75 1137w,
               ${article.fields.image.fields.file.url}?w=1737&h=564&fit=fill&q=75 1737w`
            "
            :lazy-src="
              article.fields.image.fields.file.url +
                '?fm=jpg&fl=progressive&w=414&h=138&fit=fill&q=25'
            "
            :aspect-ratio="10 / 3"
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
        <div class="snackamat-article__content">
          <div class="snackamat-article__header">
            <h2>{{ article.fields.title }}</h2>
          </div>
          <main class="snackamat-article__html" v-html="richTextHtml"></main>
        </div>
        <div class="snackamat-article__metadata">
          <div
            class="snackamat-article__cuisines"
            v-if="article.fields.cuisines && article.fields.cuisines.length > 0"
          >
            <h3 class="sr-only">Kök</h3>
            <ul>
              <li v-for="cuisine in article.fields.cuisines" :key="cuisine">
                <nuxt-link
                  :to="{ name: 'artiklar', query: { q: cuisine } }"
                  no-prefetch
                >
                  <v-chip nuxt link color="primary"
                    >{{ cuisine }}
                  </v-chip></nuxt-link
                >
              </li>
            </ul>
          </div>
          <div
            class="snackamat-article__methods"
            v-if="article.fields.methods && article.fields.methods.length > 0"
          >
            <h3 class="sr-only">Matlagningsmetoder</h3>
            <ul>
              <li v-for="method in article.fields.methods" :key="method">
                <nuxt-link
                  :to="{ name: 'artiklar', query: { q: method } }"
                  no-prefetch
                >
                  <v-chip nuxt link color="secondary">{{
                    method
                  }}</v-chip></nuxt-link
                >
              </li>
            </ul>
          </div>
          <div
            class="snackamat-article__diets"
            v-if="article.fields.diets && article.fields.diets.length > 0"
          >
            <h3 class="sr-only">Dieter</h3>
            <ul>
              <li v-for="diet in article.fields.diets" :key="diet">
                <nuxt-link
                  :to="{ name: 'artiklar', query: { q: diet } }"
                  no-prefetch
                >
                  <v-chip nuxt link color="success">{{
                    diet
                  }}</v-chip></nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="snackamat-article__related-articles"
          v-if="article.fields.relatedArticles"
        >
          <h3 class="sr-only">Relaterade artiklar</h3>
          <v-container grid-list-lg>
            <v-layout wrap>
              <v-flex
                v-for="relatedArticle in article.fields.relatedArticles"
                :key="relatedArticle.sys.id"
              >
                <SearchResult
                  v-show="$vuetify.breakpoint.sm"
                  :article="relatedArticle"
                ></SearchResult>

                <ArticlePreview
                  v-show="
                    $vuetify.breakpoint.xsOnly || $vuetify.breakpoint.mdAndUp
                  "
                  :article="relatedArticle"
                  headerType="h4"
                ></ArticlePreview>
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
  max-width: 100%;
  @include sm {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 2fr 2fr;
    grid-template-rows: auto;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    grid-template-areas:
      'img      img       img img       img'
      'content  content   .   metadata  metadata'
      'content  content   .   related   related'
      'content  content   .   related   related';
  }

  &__img {
    grid-area: img;
    margin-bottom: 1rem;
    margin-left: -12px;
    margin-right: -12px;
    margin-top: -28px;

    @include lg {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
    }
  }

  &__content {
    grid-area: content;
  }

  &__html {
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
    grid-area: related;

    .container {
      padding: 0;
    }
  }

  &__metadata {
    grid-area: metadata;
    margin-bottom: 2rem;

    @include sm {
      margin-bottom: 0;
      align-self: end;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0.5rem;

      li {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;

        a {
          text-decoration: none;
          color: #fff;

          .v-chip {
            transition-property: box-shadow, opacity, transform;
          }

          &:hover,
          &:focus {
            text-decoration: underline;
            outline: 0;

            .v-chip {
              box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Entry } from 'contentful'
import { Component, Vue } from 'nuxt-property-decorator'
import { namespace, State } from 'vuex-class'

import ArticlePreview from '~/components/ArticlePreview.vue'
import SearchResult from '~/components/SearchResult.vue'
import Spinner from '~/components/Spinner.vue'
import { MetaService } from '~/services'
import { Article } from '~/types'

const article = namespace('article')

@Component({
  components: {
    ArticlePreview,
    SearchResult,
    Spinner
  }
})
export default class Slug extends Vue {
  @article.Getter('currentArticle') public article!: Entry<Article>

  public head() {
    const canonical = `https://snackamat.se${this.$route.path}/`

    return {
      title: this.article.fields.title,
      meta: MetaService.getMetaForArticle(this.article),
      link: [{ rel: 'canonical', href: canonical }]
    }
  }

  public async fetch({ store, params }) {
    await store.dispatch('article/getArticleBySlug', params.slug)
  }

  public transition(to, from) {
    return 'slide-left'
  }

  public get richTextHtml(): string {
    return documentToHtmlString(this.article.fields.content)
  }
}
</script>
