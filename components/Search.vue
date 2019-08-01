<template>
  <div
    class="snackamat-search"
    v-bind:class="{ 'snackamat-search--expanded': showSearchBar }"
  >
    <div class="snackamat-search__bar" v-click-outside="close">
      <v-text-field
        class="snackamat-search__bar-input"
        v-model="searchTxt"
        autofocus
        hide-details
        outlined
        v-if="showSearchBar"
        solo
        clearable
        @keydown.enter.native="search"
        @keydown.escape.native="close"
        v-on:click:clear="close"
      ></v-text-field>
      <v-btn
        color="primary"
        @click="showSearchBar ? search() : open()"
        :disabled="showSearchBar ? searchTxt === '' : false"
        class="snackamat-search__bar-btn"
        v-bind:class="{ 'snackamat-search__bar-btn--expanded': showSearchBar }"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/style/_mixins.scss';

.snackamat-search {
  width: 66px;
  height: 66px;
  padding-top: 4px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 6px;
  margin-bottom: 6px;
  flex-shrink: 0;
  transition: width 0.2s cubic-bezier(0, 0, 0.2, 1);
  overflow: hidden;

  &--expanded {
    width: 48vw;

    // @include sm {
    //   width: 230px;
    // }

    // @include md {
    //   width: 460px;
    // }

    .v-input__slot {
      padding-right: 64px !important;
    }
  }

  &__bar {
    display: flex;
    position: relative;
  }

  &__bar-btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 56px !important;
    width: 56px !important;
    min-width: inherit !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
    border-radius: 50%;
    transition: border-radius, box-shadow 0.2s cubic-bezier(0, 0, 0.2, 1);

    &:hover,
    &:focus {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
    }

    &--expanded {
      box-shadow: none !important;
      border: 0 !important;
      border-radius: 0 4px 4px 0 !important;
    }
  }
}
</style>

<style lang="scss">
.snackamat-search {
  &--expanded {
    .v-input__slot {
      padding-right: 64px !important;
    }
  }
}
</style>

<script lang="ts">
import vClickOutside from 'v-click-outside'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  directives: {
    vClickOutside
  }
})
export default class Search extends Vue {
  public showSearchBar: boolean = false
  public searchTxt: string = ''

  public close() {
    console.log('closing')
    if (this.showSearchBar) {
      this.searchTxt = ''
      this.showSearchBar = false
    }
  }

  public open() {
    this.searchTxt = ''
    this.showSearchBar = true
  }

  public search() {
    this.$router.push({ name: 'artiklar', query: { q: this.searchTxt } })

    // this.close()
  }
}
</script>


