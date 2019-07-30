<template>
  <article class="snackamat-article-preview">
    <nuxt-link
      class="snackamat-article-preview__link"
      :to="{ name: 'artikel-slug', params: { slug: article.fields.slug }}"
    >
      <v-card>
        <v-img
          height="200px"
          :alt="article.fields.image.fields.description"
          :src="article.fields.image.fields.file.url + '?fit=scale&w=350&h=300&q=75'"
          :lazy-src="article.fields.image.fields.file.url + '?fm=jpg&fl=progressive&w=568&h=200&fit=fill&q=25'"
          :srcset="`
          ${article.fields.image.fields.file.url}?w=1100&h=400&fit=fill&q=75 1100w, 
          ${article.fields.image.fields.file.url}?w=568&h=200&fit=fill&q=75 568w, 
          ${article.fields.image.fields.file.url}?w=368&h=200&fit=fill&q=75 368w,
          ${article.fields.image.fields.file.url}?w=270&h=200&fit=fill&q=75 270w`"
          sizes="
            (min-width: 1904px) 568px,
            (min-width: 1264px) 368px, 
            (min-width: 600px) 270px, 
            568px"
        ></v-img>
        <v-card-title>
          <div>
            <h4 class="snackamat-article-preview__title">{{ article.fields.title }}</h4>
            <p
              class="snackamat-article-preview__date"
            >{{article.fields.publishedAt | moment("from", "now") }}</p>
            <p>{{ article.fields.summary }}</p>
          </div>
        </v-card-title>
      </v-card>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Article } from '~/types'

@Component
export default class ArticlePreview extends Vue {
  @Prop({ type: Object, default: null })
  article!: Article
}
</script>

<style lang="scss">
.snackamat-article-preview {
  height: 100%;

  &__link {
    &:hover,
    &:focus {
      .v-card {
        box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
          0px 15px 22px 2px rgba(0, 0, 0, 0.14),
          0px 6px 28px 5px rgba(0, 0, 0, 0.12) !important;
      }
    }
  }

  .v-card {
    height: 100%;
  }

  .v-card__title {
    flex-grow: 1;
  }

  .v-image__image {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    .v-image__image {
      transform: scale(1.25);
    }
  }
}
</style>

<style scoped lang="scss">
.snackamat-article-preview {
  &__thumbnail {
    margin-bottom: 1em;
    max-width: 100%;
  }

  &__link {
    text-decoration: none;
  }

  &__title {
    font-size: 22px;
    color: #373f49;
  }

  &__date {
    color: #666;
    font-size: 14px;
  }

  &__tags {
    // padding: 0.5em 0;
  }
}
</style>
