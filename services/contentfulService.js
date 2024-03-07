import { ref } from "vue";
import { transformBlogPosts } from "./transformers";

export let blogPosts = ref([]);
export const isLoading = ref(true);

export async function fetchBlogPosts() {
  const runtimeConfig = useRuntimeConfig();
  try {
    const response = await fetch(
      `https://${runtimeConfig.public.BASE_URL}/spaces/${runtimeConfig.public.CTF_SPACE_ID}/entries?access_token=${runtimeConfig.public.CTF_CDA_ACCESS_TOKEN}`
    );
    let data = await response.json();
    let transformedPost = await transformBlogPosts(data);
    blogPosts = transformedPost;
    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

export async function fetchBlogPost(postId) {
  const runtimeConfig = useRuntimeConfig();
  try {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${runtimeConfig.public.CTF_SPACE_ID}/entries/${postId}?access_token=${runtimeConfig.public.CTF_CDA_ACCESS_TOKEN}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}
