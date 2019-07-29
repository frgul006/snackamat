<template>
  <v-app>
    <v-container>
      <h1>
        404 Not Found
      </h1>
      <p>Sidan kunde inte hittas.</p>
      <NuxtLink to="/">
        Tillbaka till startsidan
      </NuxtLink>
    </v-container>
  </v-app>
</template>

<style scoped>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'empty'
})
export default class NotFoundPage extends Vue {}
</script>
