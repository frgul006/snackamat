<template>
  <div class="snackamat-search" v-bind:class="{ 'snackamat-search--expanded': showSearchBar }">
    <div v-if="showSearchBar" class="snackamat-search__bar">
      <v-text-field
        class="snackamat-search__bar-input"
        v-model="searchTxt"
        autofocus
        hide-details
        outlined
        solo
        clearable
        @keydown.enter.native="search"
        @keydown.escape.native="close"
        v-on:click:clear="close"
      ></v-text-field>
      <v-btn
        color="primary"
        @click="search"
        :disabled="searchTxt === ''"
        class="snackamat-search__bar-btn"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </div>

    <div v-if="!showSearchBar">
      <v-btn color="primary" @click="open">
        <v-icon>search</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.snackamat-search {
  width: 64px;
  flex-shrink: 0;
  transition: width 0.2s cubic-bezier(0, 0, 0.2, 1);

  &--expanded {
    width: 230px;
  }

  &__bar {
    display: flex;
    position: relative;
  }

  &__bar-btn {
    height: 56px !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
  }
}
</style>

<style lang="scss">
.snackamat-search {
  &__bar-input {
    .v-input__slot {
      border-radius: 4px 0 0 4px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  showSearchBar: boolean = false
  searchTxt: string = ''

  close() {
    this.searchTxt = ''
    this.showSearchBar = false
  }

  open() {
    this.searchTxt = ''
    this.showSearchBar = true
  }

  search() {
    console.log(this.$route)
    this.$router.push({ path: 'artiklar', query: { q: this.searchTxt } })

    // If already on route, reload page
    if (this.$route.name === 'artiklar') {
      //   this.$router.go(0)
    }

    this.close()
  }
}
</script>


