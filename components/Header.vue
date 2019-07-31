<template>
  <div class="snackamat-header">
    <h1 class="sr-only">snackamat.se</h1>
    <nuxt-link class="snackamat-header__home" :to="{ path: '/' }">
      <img src="~/assets/logo.svg" />
    </nuxt-link>
    <v-spacer></v-spacer>

    <Search></Search>

    <!-- <div class="hidden-xs-only">
      <v-btn class="snackamat-header__link" color="primary" :to="{ path: '/recept' }" nuxt>Recept</v-btn>
    </div>
    <v-menu :offset-y="true">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" outlined class="snackamat-header__menu-btn hidden-sm-and-up">
          <v-icon>menu</v-icon>
        </v-btn>
      </template>

      <ul class="snackamat-header__menu">
        <li class="snackamat-header__menu-item">
          <v-btn
            class="snackamat-header__link"
            color="primary"
            :to="{ path: '/recept' }"
            nuxt
          >Recept</v-btn>
        </li>
      </ul>
    </v-menu>-->
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
    max-width: 350px;
    flex-grow: 1;
    padding-right: 1rem;

    img {
      width: 100%;
    }
  }

  &__menu-btn {
    min-width: inherit;
  }

  &__menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: white;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Search from '~/components/Search.vue'

@Component({
  components: {
    Search
  }
})
export default class Header extends Vue {}
</script>
