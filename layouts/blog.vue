<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink class="font-bold" to="/resources">Scrum Dojo</NuxtLink>

      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/what-is-agile">What is Agile?</NuxtLink></li>
        <li><NuxtLink to="/what-is-scrum">What is Scrum?</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div>
    <div class="container p-4 mx-auto">
      wow, this is the blog layout, amazing!
    </div>
    <slot />
  </div>
  <footer
    class="container mx-auto p-4 flex justify-between border-t-2"
  ></footer>
</template>
