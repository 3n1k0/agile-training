<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Agile Mindset Mastery. All rights reserved.</p>
      <nav class="footer-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/resources">Resources</router-link>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer p {
  margin: 0;
}

.footer-nav a {
  color: #fff;
  text-decoration: none;
  margin: 20px;
}

.footer-nav a:hover {
  text-decoration: underline;
}
</style>
