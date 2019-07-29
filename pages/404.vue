<template>
  <v-app>
    <v-container>
      <div class="snackamat-404">
        <h2>
          Hoppsan!
        </h2>
        <p>Vi kunde inte hitta sidan du försökte surfa till.</p>
        <NuxtLink to="/">
          Tillbaka till startsidan
        </NuxtLink>
      </div>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.snackamat-404 {
  text-align: center;
  h2 {
    font-size: 20vw;
  }
  p {
    font-size: 4vw;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  layout: 'empty'
})
export default class NotFoundPage extends Vue {}
</script>
