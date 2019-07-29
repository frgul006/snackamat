<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  layout: 'empty'
})
export default class ErrorLayout extends Vue {
  @Prop({ type: Object, default: null })
  error!: any

  head() {
    const titles = {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
    const title =
      this.error.statusCode === 404 ? titles.pageNotFound : titles.otherError
    return {
      title
    }
  }
}
</script>
