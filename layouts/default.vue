<template>
  <header class="shadow-sm bg-white">
    <Navigation />
  </header>

  <div class="app-container">
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<style scoped>
.logo {
  color: #007bff;
}

.logo a {
  text-decoration: none;
}

.active {
  color: pink;
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
