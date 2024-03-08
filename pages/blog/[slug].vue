<template>
  <div class="post" v-if="post">
    <h1 class="title">{{ post.title }}</h1>
    <div class="content">
      <p class="body">{{ post.body }}</p>
      <img
        :src="post.featuredImageURL"
        alt="Featured Image"
        class="featured-image"
      />
    </div>
  </div>
  <div v-else class="loading">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { fetchEntryBySlug } from "~/services/contentfulService";

const router = useRouter();
const post = ref(null);

onMounted(async () => {
  try {
    const slug = router.currentRoute.value.params.slug;
    const posts = await fetchEntryBySlug(slug);
    if (posts.length > 0) {
      post.value = posts[0];
    } else {
      console.error("Post not found for slug:", slug);
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.content {
  margin-top: 20px;
}

.body {
  font-size: 16px;
  line-height: 1.6;
}

.featured-image {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

.loading {
  text-align: center;
  margin-top: 50px;
}
</style>
