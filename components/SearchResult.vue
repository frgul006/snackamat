<template>
  <article class="snackamat-search-result">
    <nuxt-link
      class="snackamat-search-result__link"
      :to="{ name: 'artikel-slug', params: { slug: article.fields.slug } }"
    >
      <v-card>
        <div class="snackamat-search-result__wrapper">
          <div class="snackamat-search-result__img">
            <v-img
              :width="imageWidth"
              height="100%"
              :alt="article.fields.image.fields.description"
              :src="
                article.fields.image.fields.file.url +
                  '?fit=scale&w=72&h=144&q=75'
              "
              :lazy-src="
                article.fields.image.fields.file.url +
                  '?fm=jpg&fl=progressive&w=72&h=144&fit=fill&q=25'
              "
              :srcset="
                `
          ${article.fields.image.fields.file.url}?w=72&h=144&fit=fill&q=75 72w,
          ${article.fields.image.fields.file.url}?w=144&h=144&fit=fill&q=75 144w,
          ${article.fields.image.fields.file.url}?w=288&h=144&fit=fill&q=75 288w`
              "
              sizes="
            (min-width: 960px) 288px,
            (min-width: 600px) 144px,
            72px"
            ></v-img>
          </div>
          <div class="snackamat-search-result__content">
            <h4 class="snackamat-search-result__title">
              {{ article.fields.title }}
            </h4>
            <p class="snackamat-search-result__summary text--primary">
              {{ article.fields.summary | truncate(truncationLength) }}
            </p>
          </div>
        </div>
      </v-card>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Article } from '~/types'

@Component
export default class SearchResult extends Vue {
  @Prop({ type: Object, default: null })
  public article!: Article

  get imageWidth() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return '72px'
      case 'sm':
        return '144px'
      case 'md':
        return '288px'
      case 'lg':
        return '288px'
      case 'xl':
        return '288px'
    }
  }

  get truncationLength() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return '80'
      case 'sm':
        return '200'
      case 'md':
        return '320'
      case 'lg':
        return '320'
      case 'xl':
        return '320'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/style/_mixins.scss';

.snackamat-search-result {
  height: 100%;

  &__link {
    display: block;
    height: 100%;
    text-decoration: none;
  }

  &__wrapper {
    position: relative;
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }

  &__content {
    margin-left: 72px;
    padding: 12px;

    @include sm {
      margin-left: 144px;
    }

    @include md {
      margin-left: 288px;
    }
  }

  &__title {
    font-size: 16px;
    color: #373f49;
  }

  &__summary {
    font-size: 14px;
    margin: 0;
  }
}
</style>

<style lang="scss">
.snackamat-search-result {
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
