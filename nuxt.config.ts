// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      BASE_URL: process.env.BASE_URL,
    },
  },
});
