// import '@fortawesome/fontawesome-free/css/all.css'

import DefaultLayout from '~/layouts/Default.vue'

import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

export default function (Vue, { router, head, isClient }) {

 	head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
  })

  Vue.use(Vuetify, {

  theme: {
    primary: '#2196F3',
    secondary: '#CFD8DC',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

  Vue.component('Layout', DefaultLayout)
}
