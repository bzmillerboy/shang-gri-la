// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/bootstrap.css'
import '~/assets/style.css'
import '~/assets/css/dark.css'
import '~/assets/barber/barber.css'
import '~/assets/barber/css/fonts.css'
import '~/assets/css/font-icons.css'
import '~/assets/css/animate.css'
import '~/assets/css/magnific-popup.css'
import '~/assets/one-page/css/et-line.css'
import '~/assets/css/responsive.css'
import '~/assets/barber/css/colors.css'

import '~/assets/js/jquery.js'
import '~/assets/js/plugins.js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'http://fonts.googleapis.com/css?family=PT+Sans+Caption:400,700|PT+Sans:400,700|PT+Serif:400,400i'
  })
  head.style.push({
    type: 'text/css',
    cssText: '.css3-spinner {height:100vh; -webkit-box-align:center; -ms-flex-align:center; align-items:center; display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-pack:center; -ms-flex-pack:center; justify-content:center; background-color: #bF9456; } @keyframes pulse {0% {opacity: 0; -webkit-transform: scale3d(.8, .8, .8); transform: scale3d(.8, .8, .8); } 50% { opacity: 1; } } .infinite.animated.pulse { -webkit-animation-duration: 1.7s; animation-duration: 1.7s; }'
  })
  // head.script.push({ src: '/assets/js/jquery.js' })
  // head.script.push({ src: '/assets/js/plugins.js' })
  // head.style.push({src: 'https://maps.google.com/maps/api/js?key=AIzaSyDGka1X-NRAvbiYrAzYRTYsbhTQIKFdyLI'})
  // head.script.push({ src: '/assets/js/theme.min.js' })
  // head.script.push({ src: '/assets/js/jquery.gmap.js' })
  // head.script.push({ src: '/assets/js/functions.js' })
  // head.script.push({ src: '/assets/js/map.js' })

  // Add attributes to BODY tag
  head.bodyAttrs = {class: 'stretched' }
  
}