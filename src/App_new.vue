<template>
  <div id="app">
    <nav class="navigation" v-if="showNavigation">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">
          <img src="/logo.png" alt="BitingLip" class="nav-logo" />
          <span class="nav-text cal-sans-regular">BitingLip</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
    </nav>
    
    <main class="main-content" :class="{ 'home-page': isHomePage }">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showNavigation() {
      // Show navigation on all pages except home
      return this.$route.path !== '/'
    },
    isHomePage() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style>
.cal-sans-regular {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #2a2a2a;
}

#app {
  min-height: 100vh;
}

.navigation {
  background-color: rgba(42, 42, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #444;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
}

.nav-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.nav-text {
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #cccccc;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link.router-link-active {
  color: white;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: white;
}

.main-content {
  padding-top: 80px;
}

.main-content.home-page {
  padding-top: 0;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .main-content {
    padding-top: 120px;
  }
  
  .main-content.home-page {
    padding-top: 0;
  }
}
</style>
