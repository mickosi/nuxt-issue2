// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
    typescript: {
      tsConfig: {
        compilerOptions: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          esModuleInterop: true,
          isolatedModules: false,
        },
      },
    },
  },
    typescript: {
    includeWorkspace: true,
    typeCheck: false,
    shim: false, // For TypeScript Vue Plugin (Volar).
    // strict: true,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        esModuleInterop: true,
        isolatedModules: false,
      },
    },
  },
    vite: {
    cacheDir: '.cache/vite',
    clearScreen: true,
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
          // emitDecoratorMetadata: true,
        },
      },
    },
  },
})
