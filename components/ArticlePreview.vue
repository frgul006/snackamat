<template>
  <article class="snackamat-article-preview">
    <nuxt-link class="snackamat-article-preview__link" :to="{ name: 'slug', params: { slug: article.fields.slug }}">
      <v-card>
        <v-img height="200px" :src="article.fields.image.fields.file.url + '?fit=scale&w=350&h=300&q=75'" :srcset="`${article.fields.image.fields.file.url}?w=350&h=300&fit=fill&q=75 350w, ${article.fields.image.fields.file.url}?w=600&h=300&fit=fill&q=75 1000w, ${article.fields.image.fields.file.url}?w=600&h=300&fit=fill&q=75 2000w`" sizes="(min-width: 1024px) 400px, 100vw">
        </v-img>
        <v-card-title>
          <div>
            <h4 class="snackamat-article-preview__title">{{ article.fields.title }}
            </h4>
            <p class="snackamat-article-preview__date">{{article.fields.publishedAt | moment("from", "now") }}</p>
            <p>{{ article.fields.summary }}</p>
          </div>
        </v-card-title>
      </v-card>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['article']
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
