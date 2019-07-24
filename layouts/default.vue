<template>
  <v-app>
    <v-toolbar app dark prominent height="100px">
      <div class="foodis-toolbar">
        <Header></Header>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid class="foodis-content">
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
.foodis-content {
  margin-bottom: 150px;
}
.foodis-toolbar {
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
