<template>
  <div class="about">
    <div class="container">
      <div class="content">
        <h1 class="title cal-sans-regular">About BitingLip</h1>
        <div class="about-content">
          <p class="description">
            BitingLip is at the forefront of GPU cluster technology, providing cutting-edge infrastructure 
            for high-performance computing, machine learning, and artificial intelligence workloads.
          </p>
          <p class="description">
            Our mission is to democratize access to powerful computing resources, enabling researchers, 
            developers, and organizations to tackle the most demanding computational challenges.
          </p>
          <div class="features">
            <h2 class="subtitle cal-sans-regular">What We Offer</h2>
            <ul class="feature-list">
              <li>High-performance GPU clusters</li>
              <li>Scalable infrastructure solutions</li>
              <li>Machine learning optimization</li>
              <li>AI workload acceleration</li>
              <li>24/7 technical support</li>
            </ul>
          </div>
          <router-link to="/" class="back-btn">← Back to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.cal-sans-regular {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.about {
  min-height: 100vh;
  background-color: #2a2a2a;
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content {
  color: white;
}

.title {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
}

.about-content {
  line-height: 1.6;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #cccccc;
}

.subtitle {
  font-size: 2rem;
  margin: 2rem 0 1rem 0;
  color: white;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #444;
  color: #cccccc;
  font-size: 1.1rem;
}

.back-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #444;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-btn:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>
