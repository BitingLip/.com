<template>
  <div class="home">
    <div class="container">
      <div class="content-wrapper">
        <a 
          href="https://github.com/BitingLip" 
          target="_blank" 
          class="logo-link"
          @click="handleLogoClick"
        >
          <img 
            src="/logo.png" 
            alt="BitingLip Logo" 
            class="logo"
          />
        </a>
        <a 
          href="https://github.com/BitingLip" 
          target="_blank" 
          class="text-link"
          @click="handleLogoClick"
        >
          <div class="text-content">
            <h1 class="brand-text cal-sans-regular">Biting Lip</h1>
            <p class="subtitle cal-sans-regular">Sink your teeth into GPU clusters.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleLogoClick() {
      console.log('Navigating to GitHub...');
    }
  }
}
</script>

<style scoped>
.cal-sans-regular {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.home {
  min-height: 100vh;
  background-color: #2a2a2a;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.content-wrapper {
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
}

.logo-link {
  display: block;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.logo-link:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.text-link {
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 2rem;
}

.text-link:hover {
  opacity: 0.8;
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.brand-text {
  color: white;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.05em;
}

.subtitle {
  color: #cccccc;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  letter-spacing: 0.02em;
  width: 100%;
}

.logo {
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  display: block;
}

/* Responsive design */
@media (max-width: 768px) {
  .logo {
    max-width: 250px;
    max-height: 250px;
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    align-items: center;
  }
  
  .text-link {
    margin-bottom: 0;
  }
  
  .text-content {
    align-items: center;
    text-align: center;
  }
  
  .brand-text {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .logo {
    max-width: 200px;
    max-height: 200px;
  }
  
  .brand-text {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 0.9rem;
  }
}
</style>
