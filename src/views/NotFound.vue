<template>
  <div class="not-found">
    <div class="container">
      <div class="content">
        <h1 class="title cal-sans-regular">404</h1>
        <h2 class="subtitle cal-sans-regular">Page Not Found</h2>
        <p class="description">
          Looks like this page took a bite out of existence. 
          The page you're looking for doesn't exist.
        </p>
        <router-link to="/" class="home-btn">
          Return to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.cal-sans-regular {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.not-found {
  min-height: 100vh;
  background-color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
  padding: 2rem;
}

.content {
  color: white;
}

.title {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.description {
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.home-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #444;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1.1rem;
}

.home-btn:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .title {
    font-size: 4rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }
}
</style>
