<template>
  <div class="contact">
    <div class="container">
      <div class="content">
        <h1 class="title cal-sans-regular">Contact Us</h1>
        <div class="contact-content">
          <p class="description">
            Ready to sink your teeth into GPU clusters? Get in touch with us to discuss 
            your computational needs and infrastructure requirements.
          </p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <h3 class="method-title">GitHub</h3>
              <p class="method-description">
                Check out our projects and contribute to our open-source initiatives.
              </p>
              <a 
                href="https://github.com/BitingLip" 
                target="_blank" 
                class="contact-link"
              >
                Visit our GitHub →
              </a>
            </div>
            
            <div class="contact-method">
              <h3 class="method-title">Business Inquiries</h3>
              <p class="method-description">
                For enterprise solutions and custom infrastructure needs.
              </p>
              <a 
                href="https://github.com/BitingLip" 
                target="_blank" 
                class="contact-link"
              >
                Get in touch →
              </a>
            </div>
            
            <div class="contact-method">
              <h3 class="method-title">Technical Support</h3>
              <p class="method-description">
                Need help with your GPU cluster implementation?
              </p>
              <a 
                href="https://github.com/BitingLip" 
                target="_blank" 
                class="contact-link"
              >
                Technical support →
              </a>
            </div>
          </div>
          
          <router-link to="/" class="back-btn">← Back to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.cal-sans-regular {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.contact {
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

.description {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #cccccc;
  text-align: center;
  line-height: 1.6;
}

.contact-methods {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-method {
  background-color: #363636;
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-3px);
}

.method-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.method-description {
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-link {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #555;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.contact-link:hover {
  background-color: #666;
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
}
</style>
