<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchBlogPost } from "~/services/contentfulService";
import { useRouter } from "vue-router";

const router = useRouter();
const post = ref(null);

onMounted(async () => {
  const postId = router.currentRoute.value.params.id;
  post.value = await fetchBlogPost(postId);
});
</script>
<style scoped></style>
