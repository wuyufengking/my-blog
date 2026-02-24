import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Home from './components/Home.vue'
import Memo from './components/Memo.vue' // 1. 引入
import MemoCard from './components/MemoCard.vue' // 引入新卡片组件
import ArticleIndex from './components/ArticleIndex.vue' // 文章索引页组件

// 引入样式文件 - 必须包含Tailwind CSS
import './style.css'

/**
 * VitePress 主题配置
 * 扩展默认主题，添加自定义组件和布局
 */
export default {
  // 继承默认主题的所有功能
  ...DefaultTheme,

  // 使用自定义Layout组件替换默认Layout
  Layout,

  // 应用增强配置
  enhanceApp({ app, router, siteData }) {
    // 全局注册组件
    app.component('Home', Home)
    app.component('Memo', Memo) // 2. 注册
    app.component('MemoCard', MemoCard) // 注册新卡片组件
    app.component('ArticleIndex', ArticleIndex) // 注册文章索引组件

    // 可以在这里添加全局属性或插件
    if (typeof window !== 'undefined') {
      // 客户端特有的逻辑
      console.log('VitePress theme enhanced with Fuwari style')
    }
  },

  // 主题增强（可选）
  extends: DefaultTheme
}