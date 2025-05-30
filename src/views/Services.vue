<template>
  <div class="services">
    <div class="container">
      <div class="content">
        <h1 class="title cal-sans-regular">Our Services</h1>
        <div class="services-grid">
          <div class="service-card">
            <h3 class="service-title">GPU Clusters</h3>
            <p class="service-description">
              High-performance GPU clusters optimized for parallel computing workloads.
            </p>
          </div>
          <div class="service-card">
            <h3 class="service-title">Machine Learning</h3>
            <p class="service-description">
              Accelerated ML training and inference with optimized frameworks.
            </p>
          </div>
          <div class="service-card">
            <h3 class="service-title">AI Infrastructure</h3>
            <p class="service-description">
              Scalable infrastructure for AI research and production deployments.
            </p>
          </div>
          <div class="service-card">
            <h3 class="service-title">Cloud Computing</h3>
            <p class="service-description">
              Flexible cloud-based solutions for varying computational needs.
            </p>
          </div>
        </div>
        <router-link to="/" class="back-btn">← Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.cal-sans-regular {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.services {
  min-height: 100vh;
  background-color: #2a2a2a;
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content {
  color: white;
}

.title {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background-color: #363636;
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.service-description {
  color: #cccccc;
  line-height: 1.6;
}

.back-btn {
  display: inline-block;
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
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
