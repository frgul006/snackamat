import moment from 'moment'
import 'moment/locale/sv' // whatever you import here will be set as default, no need to import all locales you intend to use
import Vue from 'vue'
import VueMoment from 'vue-moment'

Vue.use(VueMoment, { moment: moment })
