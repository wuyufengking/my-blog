<template>
  <div class="layout-container">
    <!-- 使用VitePress默认主题，但扩展Layout功能 -->
    <DefaultTheme.Layout>
      <!-- 重要：保留所有默认插槽，确保搜索功能正常工作 -->
      <template #nav-bar-content-before>
        <slot name="nav-bar-content-before" />
      </template>

      <template #nav-bar-content-after>
        <slot name="nav-bar-content-after" />
      </template>

      <template #nav-screen-content-before>
        <slot name="nav-screen-content-before" />
      </template>

      <template #nav-screen-content-after>
        <slot name="nav-screen-content-after" />
      </template>

      <!-- 重要：在文章底部预留评论插槽 (doc-after) -->
      <template #doc-after>
        <!-- 评论组件将在这里渲染 -->
        <slot name="doc-after" />

        <!-- 如果是文章页面且不在首页，可以在这里添加额外的内容 -->
        <div v-if="isPostPage && !isHomePage" class="post-footer">
          <div class="post-navigation">
            <!-- 上一篇/下一篇导航可以在这里添加 -->
          </div>
        </div>
      </template>

      <template #doc-bottom>
        <slot name="doc-bottom" />
      </template>

      <template #doc-footer-before>
        <slot name="doc-footer-before" />
      </template>

      <template #doc-footer-after>
        <slot name="doc-footer-after" />
      </template>

      <template #sidebar-nav-before>
        <slot name="sidebar-nav-before" />
      </template>

      <template #sidebar-nav-after>
        <slot name="sidebar-nav-after" />
      </template>

      <!-- 首页特殊处理：当frontmatter.layout === 'home' 时渲染Home组件 -->
      <template #home-hero-after v-if="frontmatter.layout === 'home'">
        <Home />
      </template>

      <!-- 如果没有指定layout为home，则使用默认的Content渲染 -->
      <template #home-features-after v-else-if="!frontmatter.layout && route.path === '/'">
        <!-- 默认首页内容可以在这里自定义 -->
        <DefaultTheme.HomeFeatures />
      </template>

      <!-- 页脚内容 -->
      <template #layout-bottom>
        <footer class="custom-footer">
          <div class="footer-content">
            <p>&copy; {{ currentYear }} My Blog. Powered by VitePress & Fuwari Style.</p>
            <div class="footer-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="/feed.xml" target="_blank">
                RSS
              </a>
            </div>
          </div>
        </footer>
        <slot name="layout-bottom" />
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from './components/Home.vue'

// 获取VitePress数据和路由信息
const { frontmatter, site } = useData()
const route = useRoute()

// 计算属性
const isHomePage = computed(() => route.path === '/')
const isPostPage = computed(() => {
  // 判断是否为文章页面（根据路径模式）
  return /^\/posts\//.test(route.path) && frontmatter.value.title
})

const currentYear = computed(() => new Date().getFullYear())

// 响应式数据
const isLoading = ref(false)

// 页面加载状态管理
if (typeof window !== 'undefined') {
  // 监听路由变化
  route.path // 确保响应式
}
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
}

/* 自定义页脚样式 */
.custom-footer {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

.footer-content {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-content p {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--vp-c-brand-1);
}

/* 文章页面底部样式 */
.post-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .footer-links {
    justify-content: center;
  }
}

/* 暗色模式适配 */
html.dark .custom-footer {
  border-top-color: var(--vp-c-divider);
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 确保插槽内容正确渲染 */
:deep(.VPContent) {
  min-height: calc(100vh - var(--vp-nav-height));
}

/* 首页特殊样式 */
:deep(.VPHome) {
  padding-bottom: 0;
}
</style>