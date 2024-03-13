<template>
  <div class="blog-card" @click="navigateToPost">
    <div class="image-container">
      <img
        :src="post.featuredImageURL"
        alt="Featured Image"
        class="featured-image"
      />
    </div>
    <div class="content">
      <h3 class="title">{{ post.title }}</h3>
      <p class="body">{{ truncateText(post.body, 150) }}</p>
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
  return text.substring(0, length) + "...read more";
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
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;
}

.featured-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 15px;
}

.title {
  font-size: 18px;
  margin-bottom: 10px;
}

.body {
  font-size: 14px;
  color: #666;
}
</style>
