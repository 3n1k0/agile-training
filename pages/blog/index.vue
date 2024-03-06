<template>
  <div>
    <h2>all blog posts</h2>
    <p>here there will be a list of blogposts</p>
    <NuxtLink to="/blog/blogpost"> <BlogCard /> </NuxtLink>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  font-size: 16px;
}
</style>
