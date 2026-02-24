<template>
  <div class="article-index">
    <!-- 页面标题区 -->
    <div class="article-index__header">
      <h1 class="article-index__title">文章</h1>
      <p class="article-index__desc">{{ totalCount }} 篇文章</p>
    </div>

    <!-- 按年份分组 -->
    <div v-for="group in groupedPosts" :key="group.year" class="year-group">
      <!-- 年份标题 -->
      <div class="year-label">{{ group.year }}</div>

      <!-- 该年文章列表 -->
      <ul class="post-list">
        <li v-for="post in group.posts" :key="post.url" class="post-item">
          <a :href="withBase(post.url)" class="post-link">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-title">{{ post.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as postsData } from '../posts.data.mjs'

// 格式化日期为 MM-DD
const formatDate = (raw) => {
  const date = new Date(raw)
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${m}-${d}`
}

// 按年份分组
const groupedPosts = computed(() => {
  const groups = {}
  postsData.forEach(post => {
    const year = new Date(post.date).getFullYear()
    if (!groups[year]) groups[year] = []
    groups[year].push(post)
  })
  return Object.keys(groups)
    .sort((a, b) => b - a)
    .map(year => ({ year, posts: groups[year] }))
})

const totalCount = computed(() => postsData.length)
</script>

<style scoped>
/* ===== 页面容器 ===== */
.article-index {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

/* ===== 页面标题区 ===== */
.article-index__header {
  margin-bottom: 3.5rem;
  padding-top: 2rem;
}

.article-index__title {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.article-index__desc {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* ===== 年份分组 ===== */
.year-group {
  margin-bottom: 2.5rem;
  margin-top: 1rem;
}

.year-label {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

/* ===== 文章列表 ===== */
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

html.dark .post-item {
  border-bottom-color: rgba(255, 255, 255, 0.04);
}

/* ===== 文章条目链接 ===== */
.post-link {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 0.75rem 0;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.post-link:hover .post-title {
  color: #8b0000;
  text-decoration: underline;
  text-underline-offset: 3px;
}

html.dark .post-link:hover .post-title {
  color: #d97b6c;
}

/* ===== 日期 ===== */
.post-date {
  flex-shrink: 0;
  width: 3.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.82rem;
  color: #8b0000;
  line-height: 1.5;
}

html.dark .post-date {
  color: #d97b6c;
}

/* ===== 标题 ===== */
.post-title {
  font-family: 'Noto Serif SC', 'Georgia', serif;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
  line-height: 1.5;
  transition: color 0.15s ease;
}

/* ===== 移动端适配 ===== */
@media (max-width: 640px) {
  .article-index {
    padding: 1.5rem 0 3rem;
  }

  .article-index__header {
    padding-top: 1rem;
  }

  .post-link {
    gap: 1rem;
  }

  .post-title {
    font-size: 1rem;
  }
}
</style>
