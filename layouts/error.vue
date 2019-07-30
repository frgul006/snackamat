<template>
  <v-app>
    <v-container>
      <h1>{{ title }}</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/">Tillbaka till startsidan</NuxtLink>
    </v-container>
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

  get title() {
    const titles = {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
    const title =
      this.error.statusCode === 404 ? titles.pageNotFound : titles.otherError

    return title
  }

  head() {
    return {
      title: this.title
    }
  }
}
</script>
