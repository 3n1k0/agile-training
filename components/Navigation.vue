<template>
  <nav class="container mx-auto p-4 flex justify-between items-center">
    <div class="logo font-bold text-xl">
      <NuxtLink to="/">Agile Mindset Mastery</NuxtLink>
    </div>
    <ul class="flex gap-4">
      <li>
        <NuxtLink :class="{ active: $route.path === '/' }" to="/"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/what-is-agile"
          >What is Agile?</NuxtLink
          class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block"
          to="/"
          >Home</NuxtLink
        >
        <NuxtLink
          class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block"
          :class="{ active: $route.path === '/what-is-scrum' }"
          to="/what-is-scrum"
          >What is Scrum?</NuxtLink
        >
        <NuxtLink
          class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block"
          :class="{ active: $route.path === '/what-is-agile' }"
          to="/what-is-agile"
          >What is Agile?</NuxtLink
        >
        <NuxtLink
          class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block"
          :class="{ active: $route.path === '/resources' }"
          to="/resources"
          >Resources</NuxtLink
        >
        <NuxtLink
          class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block"
          :class="{ active: $route.path === '/blog' }"
          to="/blog"
          >Blog</NuxtLink
        >
        <button
          @click="isOpen = !isOpen"
          class="text-gray-700 hover:text-gray-900 md:hidden"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">Home</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">Careers</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">Blog</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100"
        >Contact Us</a
      >
      <a
        href="#"
        class="block py-2 px-4 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >Get Started</a
      >
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
</script>
