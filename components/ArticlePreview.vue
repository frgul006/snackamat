<template>
  <article class="foodis-article mb-4">
    <v-card>
      <v-img height="200px" :src="article.fields.image.fields.file.url + '?fit=scale&w=350&h=300&q=75'" :srcset="`${article.fields.image.fields.file.url}?w=350&h=300&fit=fill&q=75 350w, ${article.fields.image.fields.file.url}?w=600&h=300&fit=fill&q=75 1000w, ${article.fields.image.fields.file.url}?w=600&h=300&fit=fill&q=75 2000w`" sizes="(min-width: 1024px) 400px, 100vw">
      </v-img>
      <v-card-title>
        <div>
          <h4>
            <nuxt-link :to="{ name: 'slug', params: { slug: article.fields.slug }}" class="foodis-article__title">{{ article.fields.title }}</nuxt-link>
          </h4>
          <p class="foodis-article__date">{{article.fields.publishedAt | moment("dddd, MMMM Do YYYY") }}</p>
          <p>{{ article.fields.summary }}</p>
        </div>
      </v-card-title>
    </v-card>
  </article>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style scoped lang="scss">
.foodis-article {
  &__thumbnail {
    margin-bottom: 1em;
    max-width: 100%;
  }

  &__title {
    text-decoration: none;
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
