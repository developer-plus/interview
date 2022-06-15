import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Interview',
  description: 'developer-plus 每日一题。',

  srcDir: './src',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '模拟面试', link: '/mock/Hongbusi-20220526' }
    ],

    sidebar: {
      '/mock/': getMockSidebar()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/developer-plus/interview' }
    ],

    editLink: {
      pattern: 'https://github.com/developer-plus/interview/edit/main/src/:path',
      text: '建议更改此页面'
    },

    footer: {
      message: 'developer-plus made with 💗.',
      copyright: 'Copyright © 2022-present developer-plus.'
    }
  }
})

function getMockSidebar() {
  return [
    {
      text: '2022',
      items: [
        { text: 'Hongbusi（05-26）', link: '/mock/Hongbusi-20220526' }
      ]
    }
  ]
}
