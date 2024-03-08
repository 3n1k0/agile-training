<template>
  <nav class="container mx-auto p-4 flex justify-between items-center">
    <div class="logo font-bold text-xl">
      <NuxtLink to="/">Agile Training</NuxtLink>
    </div>
    <ul class="flex gap-4">
      <li>
        <NuxtLink :class="{ active: $route.path === '/' }" to="/"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="{ active: $route.path === '/what-is-agile' }"
          to="/what-is-agile"
          >What is Agile?</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="{ active: $route.path === '/what-is-scrum' }"
          to="/what-is-scrum"
          >What is Scrum?</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="{ active: $route.path === '/resources' }"
          to="/resources"
          >Resources</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :class="{ active: $route.path === '/blog' }"
          to="/blog"
          class="btn"
          >Blog</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.logo {
  color: #007bff;
}

.logo a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
}

.active {
  color: #007bff;
}

.btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.btn:hover {
  background-color: #0056b3;
}

.app-container {
  min-height: calc(100vh - 60px);
  position: relative;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
