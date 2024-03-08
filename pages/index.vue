<template>
  <div class="container">
    <section class="top-stories">
      <h2>Top Stories</h2>
      <div class="story">
        <img src="https://picsum.photos/600/400" alt="Top Story" />
        <div class="story-content">
          <h3>Breaking News: Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet sem vitae leo pharetra viverra.
          </p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>
      <!-- Add more top stories here -->
    </section>

    <section class="featured-articles">
      <h2>Featured Articles</h2>
      <div class="article">
        <img src="https://picsum.photos/400/250" alt="Featured Article" />
        <div class="article-content">
          <h3>Featured Article: Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet sem vitae leo pharetra viverra.
          </p>
          <a href="#" class="read-more">Read More</a>
        </div>
      </div>
      <!-- Add more featured articles here -->
    </section>

    <section class="recent-news">
      <h2>Recent News</h2>
      <div class="news">
        <div class="news-item">
          <img src="https://picsum.photos/200/200" alt="Recent News" />
          <div class="news-content">
            <h3>Recent News: Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
        <!-- Add more recent news items here -->
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

h2,
h3 {
  color: #007bff;
}

.story,
.article,
.news-item {
  display: flex;
  margin-bottom: 40px;
}

img {
  width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.story-content,
.article-content,
.news-content {
  flex: 1;
}

.read-more {
  color: #007bff;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
