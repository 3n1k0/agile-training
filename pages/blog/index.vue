<template>
  <div>
    <h2>All blog posts</h2>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import {
  blogPosts,
  isLoading,
  fetchBlogPosts,
} from "~/services/contentfulService";
import { onMounted } from "vue";

onMounted(async () => {
  try {
    isLoading.value = true;
    blogPosts.value = await fetchBlogPosts();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
