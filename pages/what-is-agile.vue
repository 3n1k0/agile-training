<template>
  <div class="container">
    <h1 class="text-blue-600">What is Agile?</h1>
    <section class="overview">
      <h2 class="text-blue-600">Overview</h2>
      <p>
        Agile is a set of principles and values that guide a flexible and
        adaptive approach to software development. It emphasizes collaboration,
        customer feedback, and incremental delivery of working software.
      </p>
      <p>
        The Agile Manifesto, created in 2001 by a group of software developers,
        outlines the core principles of Agile development. These principles
        include:
      </p>
      <ul>
        <li>Individuals and interactions over processes and tools</li>
        <li>Working software over comprehensive documentation</li>
        <li>Customer collaboration over contract negotiation</li>
        <li>Responding to change over following a plan</li>
      </ul>
    </section>
    <section class="benefits">
      <h2 class="text-blue-600">Benefits of Agile</h2>
      <div class="benefit">
        <img src="https://picsum.photos/300/200" alt="Collaboration" />
        <div class="benefit-content">
          <h3 class="text-blue-600">Improved Collaboration</h3>
          <p>
            Agile encourages close collaboration between team members,
            stakeholders, and customers, leading to better communication and
            understanding of project requirements.
          </p>
        </div>
      </div>
      <div class="benefit">
        <img src="https://picsum.photos/300/200" alt="Flexibility" />
        <div class="benefit-content">
          <h3 class="text-blue-600">Flexibility</h3>
          <p>
            Agile methodologies allow for flexibility and adaptability in
            responding to changing requirements, priorities, and market
            conditions.
          </p>
        </div>
      </div>
      <div class="benefit">
        <img src="https://picsum.photos/300/200" alt="Customer Satisfaction" />
        <div class="benefit-content">
          <h3>Increased Customer Satisfaction</h3>
          <p>
            By involving customers throughout the development process and
            delivering incremental improvements, Agile ensures that the final
            product meets customer needs and expectations.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

p {
  line-height: 1.6;
}

.overview,
.benefits {
  margin-bottom: 40px;
}

.benefit {
  display: flex;
  margin-bottom: 20px;
}

img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.benefit-content {
  flex: 1;
}

@media (max-width: 600px) {
  img {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
