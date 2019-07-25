<template>
  <div class="snackamat-header">
    <nuxt-link class="snackamat-header__home" :to="{ path: '/' }">
      snackamat
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.snackamat-header {
  &__home {
    display: flex;
    align-items: center;
  }
}
</style>
