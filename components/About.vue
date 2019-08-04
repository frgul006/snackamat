<template>
  <div class="snackamat-about">
    <h2 class="sr-only">Om snackamat.se</h2>
    <div class="snackamat-about__avatar">
      <v-img
        :alt="'Bild på mig'"
        :src="`${require('~/assets/avatar.png')}`"
        :srcset="
          `
          ${require('~/assets/avatar.png')} 200w,
          ${require('~/assets/avatar@2x.png')} 400w`
        "
        sizes="
            200px"
      ></v-img>
    </div>

    <div class="snackamat-about__content">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Om snackamat.se</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Har du någonsin lagat en rätt för första gången och i efterhand
              insett att du borde ha gjort något annorlunda?
            </p>
            <p>
              Jag kommer ofta på mig själv med att recensera min egen matlagning
              tätt följt av tankar som ”Jag skulle ha tagit av laxen på 54
              grader istället för 56” eller ”Det här skulle passat perfekt med
              rostad potatis istället för ris”.
            </p>
            <p>
              Strax därefter har jag glömt bort min läxa och nästa gång jag står
              i köket och ska laga samma rätt igen så har jag glömt bort allting
              jag lärde mig förra gången.
            </p>
            <p>
              Den här sidan är min personliga anteckningsbok för ”lessons
              learned”. Så utöver recept så kommer det att stå en hel del om
              riskmoment och fallgropar som jag oftast själv har råkat ut för.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Om mig</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p><b>Fredrik</b> heter jag och livnär mig som programmerare.</p>
            <p>
              Jag är gammal nog för att ha upptäckt grå hårstrån på platser jag
              inte trodde man kunde få hår på men ung nog för att inte svära åt
              ungdomar och deras höga musik.
            </p>

            <p>
              Jag har en dotter på fyra år som anser att höjden av kulinarisk
              konst är kall korv med ris så det blir inte av så ofta som jag
              hade önskat men jag försöker anteckna här när jag väl får
              möjligheten att laga något nytt!
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/style/_mixins.scss';

.snackamat-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 621px;

  @include sm {
    flex-direction: row;
    align-items: inherit;
  }

  &__avatar {
    height: 200px;
    width: 200px;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    border-bottom-left-radius: 0;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top-right-radius: 100px;
    margin-bottom: 0.5rem;

    @include sm {
      margin-bottom: 0;
      margin-right: 0.5rem;
      border-bottom-left-radius: 100px;
      border-top-left-radius: 100px;
      border-bottom-right-radius: 100px;
      border-top-right-radius: 0;
    }

    .v-image {
      border-radius: inherit;
      display: inline-flex;
      height: inherit;
      width: inherit;
    }
  }

  &__content {
    font-size: 0.875rem;
    flex-grow: 1;

    width: 100%;

    @include sm {
      width: inherit;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>


