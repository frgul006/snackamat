<template>
  <v-container>
    <v-layout>
      <div class="snackamat-search">
        <h2 class="sr-only">Sök bland artiklar</h2>
        <p>{{$route.query.herp}}</p>
        <v-text-field outlined append-outer-icon="place"></v-text-field>
      </div>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
@import '~/assets/style/_mixins.scss';

.snackamat-search {
}
</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  head() {
    let canonical = `https://snackamat.se${this.$route.path}/`

    return {
      title: 'Sök',
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
