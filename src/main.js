import App from './App.vue'
import router from './router'
import store from './store'
import {createApp} from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faHouse,
  faArrowRightArrowLeft,
  faCartShopping,
  faWallet,
  faXmark,
  faCoins,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faHouse)
library.add(faArrowRightArrowLeft)
library.add(faCartShopping)
library.add(faWallet)
library.add(faXmark)
library.add(faCoins)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount('#app');
