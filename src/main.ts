import 'bootstrap'
import '@/assets/other/swiper/swiper-bundle.min.css'
import 'vue3-toastify/dist/index.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import '@/assets/css/skins.css'
import '@/assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#c6a47e',
    cancelButtonColor: '#ff7674',
  };
const app = createApp(App)
app.use(VueSweetalert2, options);
app.use(router)
app.mount('#app')
