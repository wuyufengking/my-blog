<template>
  <div class="comments-container">
    <Giscus
      id="comments"
      repo="wuyufengking/my-blog"
      repoId="R_kgDOQRITmg"
      category="Announcements"
      categoryId="DIC_kwDOQRITms4CzI0p"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<style scoped>
.comments-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

/* Giscus 评论框样式优化 */
:deep(.gsc-main-content) {
  background-color: var(--vp-c-bg);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:deep(.gsc-replies) {
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  margin-top: 0.5rem;
}

/* 暗色模式适配 */
html.dark :deep(.gsc-main-content) {
  background-color: var(--vp-c-bg);
  border-color: var(--vp-c-border);
}

html.dark :deep(.gsc-replies) {
  background-color: var(--vp-c-bg-alt);
  border-color: var(--vp-c-divider);
}

/* 加载状态优化 */
:deep(.gsc-loading) {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comments-container {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
}
</style>