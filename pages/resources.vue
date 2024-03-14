<template>
  <div class="container mx-auto p-4">
    <h2 class="text-3xl font-bold mb-4">Resources</h2>
    <section>
      <h3 class="text-xl font-bold mb-2">Books</h3>
      <ul>
        <li>
          <a class="text-blue-600 no-underline" href="#"
            >Scrum: The Art of Doing Twice the Work in Half the Time</a
          >
        </li>
        <li><a href="#">Agile Estimating and Planning</a></li>
      </ul>
    </section>

    <section class="mt-8">
      <h3 class="text-xl font-bold mb-2">Courses</h3>
      <ul>
        <li>
          <a class="text-blue-600 no-underline" href="#"
            >Certified ScrumMaster (CSM) Course</a
          >
        </li>
        <li>
          <a class="text-blue-600 no-underline" href="#"
            >Agile Fundamentals Certification</a
          >
        </li>
      </ul>
    </section>

    <section class="mt-8">
      <h3 class="text-xl font-bold mb-2">Tools</h3>
      <ul>
        <li>
          <a class="text-blue-600 no-underline" href="#">Jira Software</a> -
          Project management tool for Agile teams
        </li>
        <li><a href="#">Trello</a> - Collaborative tool for task management</li>
        <!-- Add more tool links here -->
      </ul>
    </section>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

a:hover {
  text-decoration: underline;
}
</style>
