<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink class="font-bold" to="/resources">Scrum Dojo</NuxtLink>

      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/what-is-agile">What is Agile?</NuxtLink></li>
        <li><NuxtLink to="/what-is-scrum">What is Scrum?</NuxtLink></li>
        <li><NuxtLink to="/blog/blogpost" class="btn">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot />
  </div>

  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    this is the footer
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: pink;
}
</style>
