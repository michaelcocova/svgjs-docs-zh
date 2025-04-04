import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
// https://vitepress.dev/reference/site-config
export default () => {

  console.log(import.meta)
  return defineConfig({
    title: 'SVG.js 中文文档',
    description: 'SVG.js 是一个强大且轻量的 SVG 操作与动画库，支持现代浏览器，提供简洁直观的 API。查阅完整的 SVG.js 中文文档，学习如何高效操作矢量图形，创建动画与交互效果',
    keywords: 'SVG.js, SVG, 矢量图形, 动画, 交互, JavaScript, 前端开发',
    lang: 'zh-CN',
    srcDir: 'src',
    cacheDir: 'node_modules/.vitepress/cache',
    cleanUrls: true,
    sitemap: {
      hostname: 'https://svgjs.com.cn',
    },
    lastUpdated: false,
    outDir: 'dist',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      [
        'script',
        {},
        `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?af67a99c9b452fad21b8962af9a482e1";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`,
      ],
    ],
    ignoreDeadLinks: true,
    themeConfig: {
      search: {
        provider: 'local',
        options: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      },
      logo: '/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '文档', link: '/introduction' },
        { text: '英文官网', link: 'https://svgjs.dev/', target: '_blank' },
      ],
      docFooter: {
        next: '下一篇',
        prev: '上一篇',
      },
      outline: {
        label: '页面导航',
      },
      langMenuLabel: '多语言',
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
      skipToContentLabel: '跳转到内容',
      sidebar,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/michaelcocova/svgjs-docs-zh' },
      ],

      footer: {
        message: '基于 <a href="https://svgjs.dev/">SVG.js</a> 官方文档翻译 · <a href="https://github.com/michaelcocova/svgjs-docs-zh/blob/main/LICENSE">MIT License</a>.',
        copyright: 'Copyright © 2025-present <a href="https://github.com/michaelcocova">Michael Cocova</a>'
      }
    },
  })
}
