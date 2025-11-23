<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section - 全屏Banner -->
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
      :style="heroBackgroundStyle"
    >
      <!-- 背景遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>

      <!-- Hero内容 -->
      <div class="relative z-20 text-center text-white px-4 animate-fade-in">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          {{ siteData.title }}
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          {{ heroData.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#posts"
            class="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            浏览文章
          </a>
          <a
            href="/about"
            class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            关于我
          </a>
        </div>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- 主内容区域 - 双栏布局 -->
    <section id="posts" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 左侧边栏 - 个人信息卡片 (Sticky) -->
        <aside class="md:col-span-1">
          <div class="sticky top-24 space-y-6">
            <!-- 个人资料卡片 -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div class="text-center">
                <!-- 头像 -->
                <div class="relative inline-block mb-4">
                  <img
                    :src="profileData.avatar"
                    :alt="profileData.name"
                    class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                  <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-700"></div>
                </div>

                <!-- 姓名和简介 -->
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ profileData.name }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {{ profileData.bio }}
                </p>

                <!-- 统计信息 -->
                <div class="grid grid-cols-3 gap-2 mb-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-white">{{ stats.posts }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">文章</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-white">{{ stats.tags }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">标签</div>
                  </div>
                  <div class="text-center">
                    <div class="text-lg font-bold text-gray-900 dark:text-white">{{ stats.views }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">浏览</div>
                  </div>
                </div>

                <!-- 社交链接 -->
                <div class="flex justify-center space-x-3">
                  <a
                    v-for="link in profileData.socialLinks"
                    :key="link.name"
                    :href="link.url"
                    :title="link.name"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path :d="link.icon" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- 额外信息卡片 -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h4 class="font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                最新动态
              </h4>
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>刚刚更新了博客主题</span>
                </div>
                <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>发布了新文章《Vue 3 响应式原理》</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- 右侧主内容 - 文章列表 -->
        <main class="md:col-span-3">
          <!-- 文章列表头部 -->
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              最新文章
            </h2>
            <div class="flex items-center space-x-4">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                全部
              </button>
            </div>
          </div>

          <!-- 文章网格 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article
              v-for="post in displayedPosts"
              :key="post.url"
              class="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <!-- 文章封面图 -->
              <div
                v-if="post.cover"
                class="relative h-48 overflow-hidden"
              >
                <img
                  :src="post.cover"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <!-- 特色标签 -->
                <div
                  v-if="post.featured"
                  class="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full"
                >
                  置顶
                </div>
              </div>

              <!-- 文章内容 -->
              <div class="p-6">
                <!-- 文章标题 -->
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors duration-200">
                  <a :href="post.url">{{ post.title }}</a>
                </h3>

                <!-- 文章摘要 -->
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {{ post.excerpt }}
                </p>

                <!-- 文章元信息 -->
                <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div class="flex items-center space-x-4">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ formatDate(post.date) }}
                    </span>
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      {{ post.readingTime }} 分钟阅读
                    </span>
                  </div>
                </div>

                <!-- 标签 -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in post.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    {{ tag }}
                  </span>
                  <span
                    v-if="post.tags.length > 3"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                  >
                    +{{ post.tags.length - 3 }}
                  </span>
                </div>

                <!-- 阅读更多 -->
                <a
                  :href="post.url"
                  class="inline-flex items-center text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                >
                  阅读全文
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>
          </div>

          <!-- 加载更多按钮 -->
          <div class="text-center mt-12" v-if="hasMorePosts">
            <button
              @click="loadMore"
              class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              加载更多文章
            </button>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { data as postsData } from '../posts.data.mjs'

// 本地实现formatDate函数，因为Data Loader不会导出辅助函数
const formatDate = (raw) => {
  const date = new Date(raw)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 获取VitePress数据
const { site, frontmatter } = useData()

// 响应式数据
const postsPerPage = 6
const currentPage = ref(1)
const isLoading = ref(false)

// 站点数据
const siteData = computed(() => site.value)

// Hero区域数据
const heroData = computed(() => ({
  subtitle: frontmatter.value.heroSubtitle || '分享技术、记录生活、持续学习',
  backgroundImage: frontmatter.value.heroImage || '/img/hero-banner.jpg'
}))

// 个人资料数据
const profileData = computed(() => ({
  name: frontmatter.value.authorName || 'Real',
  bio: frontmatter.value.authorBio || '全栈开发者，热爱开源，专注于前端技术',
  avatar: frontmatter.value.authorAvatar || '/img/avatar.jpg',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    }
  ]
}))

// 统计数据
const stats = computed(() => ({
  posts: postsData.length,
  tags: new Set(postsData.flatMap(post => post.tags)).size,
  views: '12.5k' // 模拟数据，后续可以集成统计功能
}))

// 计算Hero背景样式
const heroBackgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%), url('${heroData.value.backgroundImage}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
}))

// 分页文章显示
const displayedPosts = computed(() => {
  const start = 0
  const end = currentPage.value * postsPerPage
  return postsData.slice(start, end)
})

// 是否有更多文章
const hasMorePosts = computed(() => {
  return displayedPosts.value.length < postsData.length
})

// 加载更多文章
const loadMore = async () => {
  isLoading.value = true
  // 模拟加载延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  currentPage.value++
  isLoading.value = false
}

// 页面挂载后的初始化
onMounted(() => {
  // 可以在这里添加一些初始化逻辑
})
</script>

<style scoped>
/* 确保Tailwind类名正确应用 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 滚动行为优化 */
html {
  scroll-behavior: smooth;
}

/* 确保背景图在移动端正常显示 */
@media (max-width: 768px) {
  .hero-background {
    background-attachment: scroll;
  }
}
</style>