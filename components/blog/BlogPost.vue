<template>
  <div>
    <h1>hello</h1>
    <div v-html="post.body"></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
