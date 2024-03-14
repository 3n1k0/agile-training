<template>
  <div class="blog-list">
    <div v-if="isLoading" class="flex flex-col justify-center">
      <p class="text-center w-full">Loading...</p>
      <img
        class="loader"
        src="/img/loader.gif"
        sizes="200px sm:50px md:100px"
      />
    </div>
    <div class="blog-cards" v-else>
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
.blog-list {
  margin: 0 auto;
  padding: 45px;
  min-height: 150vh;
}
</style>

<style>
.loader {
  margin: 0 auto;
}

.blog-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  gap: 35px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .blog-cards {
    grid-template-columns: 1fr;
  }
}
</style>
