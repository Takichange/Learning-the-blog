import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
    //站点配置
    locales: {

        '/': {
            lang: 'zh-CN',
            title: '学习记录',
            description: 'note',
        },
        '/US/': {
            lang: 'en-US',
            title: 'study record',
            description: 'note',
        },
    },

    base: '/',
    // 图片路劲别名
    alias: {
        '@src/img': path.resolve(__dirname, './Public/images/')
    },

    markdown: {
        // 默认行号显示
        //     code: {
        //       lineNumbers:false
        //   } 
        // 引入路径别名匹配    
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@src/, path.resolve(__dirname, '/src/*'))

        }
    },


    //主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
            },
        },
    }
})