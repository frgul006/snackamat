<template>
  <div class="snackamat-spinner"></div>
</template>

<style scoped lang="scss">
.snackamat-spinner {
  width: 50px;
  height: 50px;
  background-image: url('~assets/icon.svg');
  background-size: cover;
  animation: spin 2s ease-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Spinner extends Vue {}
</script>


