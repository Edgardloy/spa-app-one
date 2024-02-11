import { store } from 'layout_app/store'

export const setupStore = (app) => {
  app.use(store)
}
export { store }