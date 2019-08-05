<template>
  <v-app>
    <v-app-bar app height="83px">
      <div class="snackamat-toolbar">
        <Header></Header>
      </div>
    </v-app-bar>
    <v-content>
      <div class="snackamat-content">
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.snackamat-toolbar {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  padding: 8px;
  height: 100%;
}
.snackamat-content {
  padding-top: 12px;
  overflow: hidden;
}
</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class DefaultLayout extends Vue {}
</script>
