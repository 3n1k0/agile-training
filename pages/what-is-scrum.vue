<template>
  <div class="container">
    <h1 class="text-blue-600">What is Scrum?</h1>
    <section class="overview">
      <h2 class="text-blue-600">Overview</h2>
      <p>
        Scrum is a popular Agile framework used for managing complex product
        development. It provides a flexible and iterative approach to project
        management, allowing teams to adapt to changing requirements and deliver
        value to customers quickly.
      </p>
      <p>
        Scrum is based on the principles of transparency, inspection, and
        adaptation. It divides work into small, manageable units called sprints,
        typically lasting 2-4 weeks. Each sprint culminates in a review and
        retrospective meeting, where the team reflects on their progress and
        identifies areas for improvement.
      </p>
    </section>
    <section class="benefits">
      <h2 class="text-blue-600">Benefits of Scrum</h2>
      <div class="flex mb-5">
        <img src="https://picsum.photos/300/200" alt="Efficiency" />
        <div class="benefit-content">
          <h3 class="text-blue-600">Increased Efficiency</h3>
          <p>
            Scrum promotes collaboration and transparency, leading to improved
            efficiency in project delivery. By breaking work into smaller
            increments and regularly reviewing progress, teams can identify and
            address obstacles more effectively.
          </p>
        </div>
      </div>
      <div class="benefit">
        <img src="https://picsum.photos/300/200" alt="Flexibility" />
        <div class="benefit-content">
          <h3>Flexibility</h3>
          <p>
            Scrum allows for flexibility in responding to changing requirements
            and priorities. Teams can adjust their plans and adapt to new
            information quickly, ensuring that the product meets evolving
            customer needs.
          </p>
        </div>
      </div>
      <div class="benefit">
        <img
          src="https://picsum.photos/300/200"
          class="h-48 object-cover rounded-lg mr-5"
          alt="Customer Satisfaction"
        />
        <div class="benefit-content">
          <h3>Improved Customer Satisfaction</h3>
          <p>
            By delivering working increments of the product at the end of each
            sprint, Scrum ensures regular feedback from stakeholders and
            customers. This iterative approach leads to higher customer
            satisfaction and better alignment with business goals.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
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

img {
  width: 300px;
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
