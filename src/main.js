import './assets/main.css'
import './input.css'
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({
  duration: 1000, // animation duration
  once: false,     // whether animation should happen only once
})

router.afterEach(() => {
  AOS.refresh()
})
window.addEventListener('load', () => {
  AOS.refreshHard();
});

