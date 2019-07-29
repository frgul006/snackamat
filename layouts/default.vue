<template>
  <v-app>
    <v-toolbar app prominent height="83px">
      <div class="snackamat-toolbar">
        <Header></Header>
      </div>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.snackamat-toolbar {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
}
</style>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
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
