<template>
  <!-- 外层容器：限制宽度，居中，与 About/Now 页面保持一致 -->
  <div class="home-container max-w-[720px] mx-auto px-6 py-8 md:py-12">

    <!-- 1. 极简头部：只保留名字和一句 Slogan -->
    <header class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-serif italic text-[#8b1a1a] dark:text-[#ff7b72] mb-6">
        {{ site.title }}
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed italic">
        {{ frontmatter.heroSubtitle || "在这里记录代码，沉淀思考。" }}
      </p>

      <!-- 简单的社交链接 (可选) -->
      <div class="mt-8 flex justify-center gap-6">
        <a v-for="link in frontmatter.socialLinks"
           :key="link.url"
           :href="link.url"
           target="_blank"
           class="text-gray-400 hover:text-[#8b1a1a] dark:hover:text-[#ff7b72] transition-colors">
           <!-- 使用简单的文字或 SVG，这里为了极简直接显示名字，或者你可以换回 SVG -->
           <span class="text-sm font-mono uppercase tracking-wider">{{ link.name }}</span>
        </a>
      </div>
    </header>

    <!-- 2. 文章列表 (Timeline Flow) -->
    <main class="space-y-10">
      <article
        v-for="post in displayedPosts"
        :key="post.url"
        class="group relative"
      >
        <!-- 日期 (左上角或标题上方的小字) -->
        <div class="text-xs font-mono text-gray-400 mb-2">
          {{ formatDate(post.date) }}
        </div>

        <!-- 标题 -->
        <h2 class="text-2xl font-bold font-serif mb-3 leading-tight">
          <a :href="withBase(post.url)" class="text-[#2c2c2c] dark:text-[#ebe8e4] hover:text-[#8b1a1a] dark:hover:text-[#ff7b72] transition-colors decoration-transparent border-b border-transparent hover:border-[#8b1a1a] dark:hover:border-[#ff7b72]">
            {{ post.title }}
          </a>
        </h2>

        <!-- 摘要 -->
        <p class="text-[17px] leading-loose text-gray-600 dark:text-gray-400 font-serif mb-4 line-clamp-3">
          {{ stripHtml(post.excerpt) }}
        </p>

        <!-- 阅读更多 (一个小箭头) -->
        <a :href="withBase(post.url)" class="inline-flex items-center text-sm font-bold text-[#8b1a1a] dark:text-[#ff7b72] hover:underline decoration-1 underline-offset-4 transition-opacity duration-300">
          Read more
          <span class="ml-1 text-lg">→</span>
        </a>

        <!-- 分隔线 (除最后一个外) -->
        <!-- <div class="w-12 h-[1px] bg-gray-200 dark:bg-gray-700 mt-12"></div> -->
      </article>
    </main>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { data as postsData } from '../posts.data.mjs'

const { site, frontmatter } = useData()

// 移除 HTML 标签的辅助函数
const stripHtml = (html) => {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '')
}

// 日期格式化
const formatDate = (raw) => {
  const date = new Date(raw)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}

// 模拟分页（如果需要）
const displayedPosts = computed(() => {
  return postsData
})
</script>

<style scoped>
/* 既然是极简风，我们尽量少写 CSS，多用 Tailwind */
/* 这里的样式主要用于微调 */
</style>