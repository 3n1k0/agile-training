import { ref } from "vue";
import { transformBlogPosts } from "./transformers";

export let blogPosts = ref([]);
export const isLoading = ref(true);

export async function fetchBlogPosts() {
  const runtimeConfig = useRuntimeConfig();
  try {
    const response = await fetch(
      `${runtimeConfig.public.BASE_URL}/spaces/${runtimeConfig.public.CTF_SPACE_ID}/entries?access_token=${runtimeConfig.public.CTF_CDA_ACCESS_TOKEN}`
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

export async function fetchBlogPostById(postId) {
  const runtimeConfig = useRuntimeConfig();
  try {
    const response = await fetch(
      `${runtimeConfig.public.BASE_URL}/spaces/${runtimeConfig.public.CTF_SPACE_ID}/entries/${postId}?access_token=${runtimeConfig.public.CTF_CDA_ACCESS_TOKEN}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

export async function fetchEntryBySlug(slug) {
  const runtimeConfig = useRuntimeConfig();
  const environmentId = "master";
  const contentTypeId = "blogPage";
  const baseUrl = `${runtimeConfig.public.BASE_URL}/spaces/${runtimeConfig.public.CTF_SPACE_ID}/environments/${environmentId}/entries`;
  const query = `?access_token=${
    runtimeConfig.public.CTF_CDA_ACCESS_TOKEN
  }&content_type=${contentTypeId}&fields.slug=${encodeURIComponent(slug)}`;

  try {
    const response = await fetch(baseUrl + query);
    const data = await response.json();
    if (data && data.items.length > 0) {
      console.log(transformBlogPosts(data));
      return transformBlogPosts(data);
    } else {
      throw new Error("Entry not found");
    }
  } catch (error) {
    console.error("Error fetching entry by slug:", error);
    throw error;
  }
}
