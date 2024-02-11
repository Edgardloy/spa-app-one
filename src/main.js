import { setupStore } from '@/store'

import { setupElementPlus } from '@/plugins/elementPlus'

import { setupRouter } from './router'

import { createApp, defineAsyncComponent } from 'vue'

// import App from "./App.vue"
// const App = defineAsyncComponent(() => import("layout_app/App"));
import App from "layout_app/App"

await import("layout_app/permission")

import './style.css'

const setupAll = () => {
  const app = createApp(App)
  
  setupElementPlus(app)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setupAll()
