<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<template>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span style="color: #ccc; margin-left: 1rem;">{{ post.frontmatter.date }}</span>
    </li>
  </ul>
</template>