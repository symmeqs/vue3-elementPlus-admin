import { h } from 'vue'
import type { VNode } from 'vue'

export function useIcon(unocss: String): VNode {
  return h('span', { class: unocss })
}
