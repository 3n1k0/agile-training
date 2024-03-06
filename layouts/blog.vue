<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/resources">Resources</NuxtLink></li>
        <li><NuxtLink to="/what-is-agile">What is Agile?</NuxtLink></li>
        <li><NuxtLink to="/what-is-scrum">What is Scrum?</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div>
    <slot />
  </div>

  <div>wow, this is the blog layout, amazing!</div>
  <footer>this is the footer</footer>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
