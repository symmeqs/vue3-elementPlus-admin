import { createPinia } from "pinia";
import { App } from "vue";

const store = createPinia()

export const setupPiniaStore = (app: App<Element>) => {
    app.use(store)
}