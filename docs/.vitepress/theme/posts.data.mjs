import { createContentLoader } from 'vitepress'

/**
 * 增强版文章数据加载器
 * 支持更多frontmatter字段和格式化功能
 */
export default createContentLoader('posts/*.md', {
  // 重要：包含src字段用于计算阅读时间
  includeSrc: true,
  excerpt: true,
  transform(raw) {
    return raw
      // 过滤掉草稿文章
      .filter(page => !page.frontmatter.draft)
      // 按日期降序排列
      .sort((a, b) => {
        return +new Date(b.frontmatter.date || '1970-01-01') - +new Date(a.frontmatter.date || '1970-01-01')
      })
      // 数据转换和标准化
      .map(page => {
        const { frontmatter, url, excerpt, src } = page

        return {
          // 基础信息
          url,
          title: frontmatter.title || 'Untitled',
          date: frontmatter.date || new Date().toISOString().split('T')[0],
          excerpt: frontmatter.excerpt || excerpt || '',

          // 文章元信息
          tags: Array.isArray(frontmatter.tags)
            ? frontmatter.tags
            : (frontmatter.tags ? [frontmatter.tags] : []),
          category: frontmatter.category || '',

          // 封面图（支持多种字段名）
          cover: frontmatter.cover || frontmatter.image || frontmatter.hero || '',

          // 文章状态
          draft: frontmatter.draft || false,
          featured: frontmatter.featured || frontmatter.pinned || false,

          // 作者信息（可选）
          author: frontmatter.author || '',

          // 阅读时间估算（基于字符数粗略计算，假设每分钟阅读1000字符）
          readingTime: Math.ceil((src || '').length / 500),

          // 原始frontmatter，用于扩展
          rawFrontmatter: frontmatter
        }
      })
  }
})

/**
 * 格式化日期函数
 * @param {string} dateString - 日期字符串
 * @param {string} locale - 本地化设置，默认中文
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(dateString, locale = 'zh-CN') {
  if (!dateString) return ''

  try {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    console.warn('Invalid date format:', dateString)
    return dateString
  }
}

/**
 * 格式化简短日期
 * @param {string} dateString - 日期字符串
 * @returns {string} 格式化后的短日期 (YYYY-MM-DD)
 */
export function formatDateShort(dateString) {
  if (!dateString) return ''

  try {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  } catch (error) {
    return dateString
  }
}

/**
 * 生成文章路径
 * @param {string} filePath - 文件路径
 * @returns {string} 文章URL路径
 */
export function generatePostPath(filePath) {
  return filePath
    .replace(/^.*\/posts\//, '/')
    .replace(/\.md$/, '')
    .replace(/\/index\.md$/, '/')
}

/**
 * 获取文章统计信息
 * @param {Array} posts - 文章数组
 * @returns {Object} 统计信息
 */
export function getPostsStats(posts) {
  const totalPosts = posts.length
  const totalTags = new Set()
  const categories = new Set()

  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => totalTags.add(tag))
    }
    if (post.category) {
      categories.add(post.category)
    }
  })

  return {
    totalPosts,
    totalTags: totalTags.size,
    totalCategories: categories.size,
    tags: Array.from(totalTags),
    categories: Array.from(categories)
  }
}