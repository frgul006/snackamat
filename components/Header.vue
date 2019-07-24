<template>
  <div class="foodis-header">
    <nuxt-link class="foodis-header__home" :to="{ path: '/' }">
      Foodis
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.foodis-header {
  &__home {
    display: flex;
    align-items: center;
  }
}
</style>
