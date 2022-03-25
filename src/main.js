import App from './App.vue'
import router from './router'
import {createApp} from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faHouse,
  faArrowRightArrowLeft,
  faCartShopping,
  faWallet,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faHouse)
library.add(faArrowRightArrowLeft)
library.add(faCartShopping)
library.add(faWallet)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount('#app');
