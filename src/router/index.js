import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BitingLip - Sink Your Teeth Into GPU Clusters',
      description: 'BitingLip provides powerful GPU cluster solutions for high-performance computing, machine learning, and AI workloads.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'About BitingLip - GPU Cluster Solutions',
      description: 'Learn more about BitingLip and our mission to provide cutting-edge GPU cluster infrastructure.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: {
      title: 'GPU Cluster Services - BitingLip',
      description: 'Explore our GPU cluster services for machine learning, AI, and high-performance computing workloads.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact BitingLip - Get Started Today',
      description: 'Get in touch with BitingLip to discuss your GPU cluster needs and infrastructure requirements.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found - BitingLip',
      description: 'The page you are looking for could not be found.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title and meta description based on route
router.beforeEach((to, from, next) => {
  // Handle domain redirects (.com and .org to .co)
  const currentHost = window.location.hostname
  const currentProtocol = window.location.protocol
  const currentPort = window.location.port
  
  // Only handle redirects in production (not localhost)
  if (!currentHost.includes('localhost') && !currentHost.includes('127.0.0.1')) {
    let shouldRedirect = false
    let targetHost = currentHost
    
    // Handle www. removal first
    if (currentHost.startsWith('www.')) {
      targetHost = currentHost.substring(4) // Remove 'www.'
      shouldRedirect = true
    }
    
    // Handle domain redirects (.com and .org to .co)
    if (targetHost === 'bitinglip.com' || targetHost === 'bitinglip.org') {
      targetHost = 'bitinglip.co'
      shouldRedirect = true
    }
    
    // Perform redirect if needed
    if (shouldRedirect) {
      const newUrl = `${currentProtocol}//${targetHost}${currentPort ? ':' + currentPort : ''}${to.fullPath}`
      window.location.replace(newUrl)
      return // Don't continue with navigation
    }
  }
  
  // Update page title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Update meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
  
  // Update canonical URL for SEO
  updateCanonicalUrl(to.fullPath)
  
  next()
})

// Helper function to update canonical URL
function updateCanonicalUrl(path) {
  const currentHost = window.location.hostname
  const currentProtocol = window.location.protocol
  
  // Always use .co domain for canonical URL (primary domain)
  let canonicalHost = currentHost
  
  // Remove www. if present
  if (canonicalHost.startsWith('www.')) {
    canonicalHost = canonicalHost.substring(4)
  }
  
  // Convert to .co domain for canonical
  if (canonicalHost === 'bitinglip.com' || canonicalHost === 'bitinglip.org') {
    canonicalHost = 'bitinglip.co'
  }
  
  const canonicalUrl = `${currentProtocol}//${canonicalHost}${path}`
  
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl)
  } else {
    // Create canonical link if it doesn't exist
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    canonicalLink.setAttribute('href', canonicalUrl)
    document.head.appendChild(canonicalLink)
  }
}

export default router
