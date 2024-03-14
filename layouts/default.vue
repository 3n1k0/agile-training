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
.app-container {
  min-height: calc(100vh - 60px);
  position: relative;
}
</style>
