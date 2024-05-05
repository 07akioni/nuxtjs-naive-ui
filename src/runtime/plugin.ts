import { setup } from '@css-render/vue3-ssr'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  if (import.meta.server) {
    const { collect } = setup(_nuxtApp.vueApp)
    _nuxtApp.hooks.hook('app:rendered', () => {
      if (_nuxtApp.ssrContext) {
        if (typeof _nuxtApp.ssrContext.styles === 'string') {
          _nuxtApp.ssrContext.styles += collect()
        }
        else if (!_nuxtApp.ssrContext.styles) {
          _nuxtApp.ssrContext.styles = collect()
        }
      }
    })
  }
})
