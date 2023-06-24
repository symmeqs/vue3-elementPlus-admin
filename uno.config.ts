import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ /* options */ }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    colors: {
      'v-dark': 'var(--dark-bg-color)',
      'v-darkBule': 'var(--left-menu-bg-color)',
    },
  },
})
