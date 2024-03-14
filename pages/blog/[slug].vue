<template>
  <div class="post" v-if="post">
    <h1 class="text-2xl mb-5">{{ post.title }}</h1>
    <div class="mt-5">
      <p class="body">{{ post.body }}</p>
      <img
        :src="post.featuredImageURL"
        alt="Featured Image"
        class="max-w-full h-auto mt-5"
      />
    </div>
  </div>
  <div v-else class="text-center mt-12">
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

.body {
  font-size: 16px;
  line-height: 1.6;
}
</style>
