import { defineStore } from "pinia";
import { transformBlogPosts } from "~/services/transformers";

export const useBlogpostStore = defineStore("blogpost", {
  state: () => ({
    blogPosts: [],
    isLoading: false,
  }),

  actions: {
    async fetchBlogPosts() {
      this.isLoading = true;
      try {
        const runtimeConfig = useRuntimeConfig();
        if (runtimeConfig && runtimeConfig.public) {
          const response = await fetch(
            `${runtimeConfig.public.BASE_URL}/spaces/${runtimeConfig.public.CTF_SPACE_ID}/entries?access_token=${runtimeConfig.public.CTF_CDA_ACCESS_TOKEN}`
          );
          console.log(response);
          const data = await response.json();
          const transformedPosts = await transformBlogPosts(data);
          this.blogPosts = transformedPosts;
        } else {
          throw new Error(
            "Runtime configuration or 'public' property is undefined"
          );
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
