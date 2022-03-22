import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import "tailwindcss/tailwind.css"

// if (import.meta.env.DEV) {
import('ant-design-vue/dist/antd.less')
// }

async function bootstrap() {
  const app = createApp(App)
  
  setupRouter(app);

  app.mount('#app')
}

bootstrap()
