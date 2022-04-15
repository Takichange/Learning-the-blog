import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { defineUserConfig } from '@vuepress/cli'
// import { defineConfig}from 'vite'

// export default defineConfig({

//     preview: {
//         port:9988
//     }
// })
export default defineUserConfig<ViteBundlerOptions, DefaultThemeOptions>({
    // bundler: '@vuepress/bundler-vite',
    // vite 打包工具的配置项
    bundlerConfig: {
        server: {
            prot: 9090
        }
    }
})
