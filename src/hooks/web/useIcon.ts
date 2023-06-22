import { h } from 'vue'
import type { VNode } from 'vue'

export const useIcon = (unocss: String): VNode => {
    return h('span', { class: unocss })
}
