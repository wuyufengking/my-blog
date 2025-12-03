<script setup>
// 1. 必须定义 props，否则 date 传不进来
defineProps({
  date: String
})
</script>

<template>
  <div class="timeline-item">
    <!-- 2. 这里显示日期 -->
    <div class="timeline-date">{{ date }}</div>
    
    <!-- 3. 这里显示内容 -->
    <div class="timeline-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* 单个条目 */
.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 24px;
}

/* 圆点 */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 6px; 
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: var(--vp-c-bg);
  border: 2px solid #c05b4d;
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  background-color: #c05b4d;
}

:global(html.dark) .timeline-item::before {
  border-color: #d97b6c;
}
:global(html.dark) .timeline-item:hover::before {
  background-color: #d97b6c;
}

/* 日期样式 */
.timeline-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #c05b4d;
  margin-bottom: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}

:global(html.dark) .timeline-date {
  color: #d97b6c;
}

/* 内容样式 */
.timeline-content {
  font-size: 17px;
  line-height: 1.8;
  color: var(--vp-c-text-1);
  text-align: justify;
  
  /* 限制宽度，提升阅读体验 */
  max-width:900px; 
  width: 100%;
  
  /* 保留回车换行，合并多余空格 */
  white-space: pre-line; 
}
</style>