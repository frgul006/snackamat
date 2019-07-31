<template>
  <div
    class="snackamat-spinner"
    v-bind:style="{ width: size, height: size }"
  ></div>
</template>

<style scoped lang="scss">
.snackamat-spinner {
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
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Spinner extends Vue {
  @Prop({ type: String, default: '50px' })
  public size!: string
}
</script>


