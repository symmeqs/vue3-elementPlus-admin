import { defineConfig } from 'unocss'
import { presetUno, presetIcons, transformerVariantGroup, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ /* options */ }),
    // ...other presets
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  theme: {
    colors: {
      'v-dark': 'var(--dark-bg-color)'
    }
  }
})