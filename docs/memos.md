---
layout: page
sidebar: false
title: 碎碎念
---

<!-- 去掉了 H1 标题，只保留这句淡淡的序言 -->
<div class="memo-subtitle">想法的种子，灵感的碎片。</div>

<div class="timeline-container">

<!-- 2025/12/03 -->
<div class="timeline-item">
  <div class="timeline-date">2025/12/03</div>
  <div class="timeline-content">
    <p>
      长文章是"建筑"，短想法是"砖块"。<br>
      以前总想憋大招，写完美的文章，结果一年写不出两篇。现在决定先把砖块堆起来，哪天回头一看，说不定墙已经砌好了。
    </p>
  </div>
</div>

<!-- 2025/12/02 -->
<div class="timeline-item">
  <div class="timeline-date">2025/12/02</div>
  <div class="timeline-content">
    <p>
      把博客改成了极简风格，宋体字看着真舒服。去掉了多余的 UI，感觉文字的重量感回来了。这就是 Digital Minimalism 吧。
    </p>
  </div>
</div>

<!-- 2025/11/28 -->
<div class="timeline-item">
  <div class="timeline-date">2025/11/28</div>
  <div class="timeline-content">
    <p>
      在读《人月神话》，发现几十年前的软件工程问题，现在依然存在。技术变了，人性没变。
    </p>
  </div>
</div>

</div>

<style>
/* 头部副标题样式 */
.memo-subtitle {
  margin-bottom: 4rem; /* 增加底部间距，让序言和正文隔开一点 */
  color: var(--vp-c-text-2);
  font-family: 'Noto Serif SC', serif; /* 统一用宋体 */
  font-style: italic;
  font-size: 16px; /* 稍微大一点点 */
  opacity: 0.8;
}

/* 时间轴容器 */
.timeline-container {
  position: relative;
  padding-left: 12px;
  border-left: 1px solid #e0ded9; /* 线条改细一点(1px)，更精致 */
}

html.dark .timeline-container {
  border-left-color: #3c3a36;
}

/* 单个条目 */
.timeline-item {
  position: relative;
  margin-bottom: 3rem; /* 间距微调 */
  padding-left: 24px;
}

/* 时间轴上的圆点 */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px; /* 微调对齐 1px 的线 */
  top: 6px;
  width: 11px; /* 圆点稍微改小 1px */
  height: 11px;
  border-radius: 50%;
  background-color: var(--vp-c-bg);
  border: 2px solid #c05b4d; /* 边框改细一点 */
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  background-color: #c05b4d;
}

html.dark .timeline-item::before {
  border-color: #d97b6c;
}
html.dark .timeline-item:hover::before {
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

html.dark .timeline-date {
  color: #d97b6c;
}

/* 内容样式 */
.timeline-content p {
  margin: 0;
  font-size: 17px;
  line-height: 1.8;
  color: var(--vp-c-text-1);
  text-align: justify;
}
</style>