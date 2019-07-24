// plugins/vue-moment.js

// vue-moment 4.0.0
// nuxt 1.0.0
// nuxt-i18n 1.1.0

// import 'moment/locale/en' // whatever you import here will be set as default, no need to import all locales you intend to use
import moment from 'moment'
import Vue from 'vue'
import VueMoment from 'vue-moment'

Vue.use(VueMoment, { moment: moment })
