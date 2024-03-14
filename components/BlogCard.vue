<template>
  <div class="blog-card" @click="navigateToPost">
    <div class="relative overflow-hidden h-0">
      <img
        :src="post.featuredImageURL"
        alt="Featured Image"
        class="absolute w-full h-full object-cover"
      />
    </div>
    <div class="p-4">
      <h3 class="text-lg mb-2">{{ post.title }}</h3>
      <p class="text-sm">
        {{ truncateText(post.body, 150) }}
        <span class="font-bold">...read more</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const navigateToPost = () => {
  return router.push(`/blog/${props.post.slug}`);
};

const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length);
};
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  filter: brightness(0.75);
}
</style>
