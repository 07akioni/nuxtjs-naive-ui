import { setup } from '@css-render/vue3-ssr'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    const { collect } = setup(nuxtApp.vueApp)
    nuxtApp.hooks.hook('app:rendered', () => {
      if (nuxtApp.ssrContext) {
        if (typeof nuxtApp.ssrContext.styles === 'string') {
          nuxtApp.ssrContext.styles += collect()
        }
        else if (!nuxtApp.ssrContext.styles) {
          nuxtApp.ssrContext.styles = collect()
        }
      }
    })
  }
})
