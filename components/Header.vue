<template>
  <div class="snackamat-header">
    <nuxt-link class="snackamat-header__home" :to="{ path: '/' }">
      <img src="logo.svg">
    </nuxt-link>
    <v-spacer></v-spacer>
    <div class="hidden-xs-only">
      <v-btn class="snackamat-header__link" color="primary" :to="{ path: '/recipies' }" nuxt> Recept </v-btn>
      <v-btn class="snackamat-header__link" color="secondary" :to="{ path: '/how-tos' }" nuxt> Guider </v-btn>
      <v-btn class="snackamat-header__link" :to="{ path: '/about' }" nuxt> Om oss </v-btn>
    </div>
    <v-menu :offset-y="true">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" outlined dark class="hidden-sm-and-up">
          <v-icon>menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-btn class="snackamat-header__link" color="primary" :to="{ path: '/recipies' }" nuxt> Recept </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-btn class="snackamat-header__link" color="secondary" :to="{ path: '/how-tos' }" nuxt> Guider </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-btn class="snackamat-header__link" :to="{ path: '/about' }" nuxt> Om oss </v-btn>
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style lang="scss" scoped>
.snackamat-header {
  display: flex;
  flex-grow: 1;
  align-items: center;

  &__home {
    display: flex;
    align-items: center;
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }
}
</style>
