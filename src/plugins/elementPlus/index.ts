import type { App } from 'vue'

import { ElLoading, ElScrollbar } from 'element-plus';

const plugins = [ElLoading]

const components = [ElScrollbar]

export const setupElementPlus = (app: App<Element>) => {
    plugins.forEach((plugn) => {
        app.use(plugn)
    })

    components.forEach((component) => {
        app.component(component.name, component)
    })
}