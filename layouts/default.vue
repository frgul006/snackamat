<template>
  <v-app>
    <v-toolbar app prominent height="70px">
      <div class="snackamat-toolbar">
        <Header></Header>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid class="snackamat-content">
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.snackamat-content {
  margin-bottom: 150px;
}
.snackamat-toolbar {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
}
</style>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
