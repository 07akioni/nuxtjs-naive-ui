import { defineNuxtModule, createResolver, addComponent, addImportsSources, addPlugin } from '@nuxt/kit'
import { NaiveUiComponents, NaiveUiComposables } from './imports'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxtjs-naive-ui',
    configKey: 'naive-ui',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    nuxt.options.nitro.plugins = nuxt.options.nitro.plugins || []
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    NaiveUiComponents.map((component) => {
      addComponent({
        name: component,
        export: component,
        filePath: 'naive-ui',
      })
    })

    addImportsSources({
      from: 'naive-ui',
      imports: NaiveUiComposables,
    })
  },
})
