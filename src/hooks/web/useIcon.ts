
import Icon from "@/components/Icon/src/Icon.vue"
import { IconTypes } from "@/types/icon"
import { VNode, h } from "vue"

export const useIcon = (props: IconTypes): VNode => {
    return h(Icon, props)
}