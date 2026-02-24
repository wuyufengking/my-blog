<template>
  <div class="memo-entry">
    <!-- 卡片主体 -->
    <div class="memo-card">
      <!-- 顶部信息栏 (代码注释风格) -->
      <div class="memo-card__meta">
        <span class="memo-card__date">> {{ date.replace(/\//g, '-') }}</span>
        <span v-if="tags && tags.length > 0" class="memo-card__tags">
          / <span v-for="(tag, index) in tags" :key="tag" class="memo-card__tag">#{{ tag }}{{ index < tags.length - 1 ? ' ' : '' }}</span>
        </span>
      </div>

      <!-- 内容区 -->
      <div class="memo-card__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
/* ===== 条目容器（包裹卡片） ===== */
.memo-entry {
  position: relative;
  margin: 0 auto 3rem;
  max-width: 720px;
}

/* ===== 卡片 (实色温润块) ===== */
.memo-card {
  background-color: #ebebeb; /* 略深的暖灰色，与页面背景形成明显对比 */
  border: none;
  border-radius: 8px;
  box-shadow: none;
  padding: 2rem;
  overflow: hidden;
}

/* 暗色模式下卡片背景微调 */
html.dark .memo-card {
  background-color: rgba(255, 255, 255, 0.07);
}

/* ===== 顶部信息栏 (终端学者风格) ===== */
.memo-card__meta {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85rem;
  color: #8b0000;
}

html.dark .memo-card__meta {
  color: #d97b6c; /* 暗色模式下的暗红色变体 */
}

.memo-card__date {
  /* 继承 meta 的样式 */
}

/* ===== 标签 ===== */
.memo-card__tags {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.memo-card__tag {
  /* 继承 meta 的样式 */
}

/* ===== 内容区 (Manuscript Body) ===== */
.memo-card__body {
  line-height: 1.75;
  font-family: 'Noto Serif SC', 'Georgia', serif;
  color: var(--vp-c-text-1);
  font-size: 1rem;
  /* 防止内容撑破卡片 */
  min-width: 0;
  overflow: hidden;
}

/* ===== 关键：代码块横向滚动，不撑破卡片 ===== */
.memo-card__body :deep(pre),
.memo-card__body :deep(div[class*='language-']) {
  overflow-x: auto;
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}

.memo-card__body :deep(div[class*='language-']) > pre {
  overflow-x: auto;
}

/* 内容内段落间距 */
.memo-card__body :deep(p) {
  margin: 0 0 1rem;
}

.memo-card__body :deep(p:last-child) {
  margin-bottom: 0;
}

/* 内容内列表 */
.memo-card__body :deep(ul),
.memo-card__body :deep(ol) {
  padding-left: 1.5rem;
  margin: 0.5rem 0 1rem;
}

/* ===== 移动端适配 ===== */
@media (max-width: 640px) {
  .memo-entry {
    margin-bottom: 2rem;
  }

  .memo-card {
    padding: 1.25rem;
  }
}
</style>
