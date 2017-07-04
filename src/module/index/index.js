import Vue from 'vue'
import App from './App'
import navbar from 'components/common/navbar'

/* eslint-disable no-new */
new Vue({
  el: '#navbar',
  template: '<navbar/>',
  components: { navbar }
})

new Vue({
  el: '#content',
  template: '<App/>',
  components: { App }
})
