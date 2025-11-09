import DefaultTheme from 'vitepress/theme'
import ArticleList from './components/ArticleList.vue'
import './style.css' // 别忘了引入我们的样式文件

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ArticleList', ArticleList)
  }
}