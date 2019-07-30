<template>
  <v-app>
    <v-container>
      <div class="snackamat-404">
        <v-icon class="snackamat-404__icon">error</v-icon>
        <h2 class="snackamat-404__title">Hoppsan!</h2>
        <p class="snackamat-404__message">Vi kunde inte hitta sidan du försökte surfa till.</p>
        <NuxtLink to="/" class="snackamat-404__link">Tillbaka till startsidan</NuxtLink>
      </div>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
@import '~/assets/style/_mixins.scss';

.snackamat-404 {
  text-align: center;
  &__icon {
    color: #f44336;
    margin-top: 2rem;
    font-size: 20vh;

    @include lg {
      font-size: 15vh;
    }
  }
  &__title {
    font-size: 15vw;

    @include lg {
      font-size: 10vh;
    }
  }
  &__message {
    font-size: 4vw;

    @include lg {
      font-size: 3vh;
    }
  }
  &__link {
    font-size: 4vw;

    @include lg {
      font-size: 3vh;
    }
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
