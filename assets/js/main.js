// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Calculate reading time
  calculateReadingTime();
  
  // Handle mobile navigation
  initMobileNavigation();
  
  // Handle newsletter form
  initNewsletterForm();
  
  // Handle contact form
  initContactForm();
  
  // Add smooth scrolling for anchor links
  initSmoothScrolling();
  
  // Add copy to clipboard for code blocks
  initCodeCopyButtons();
});

// Calculate reading time for posts
function calculateReadingTime() {
  const readingTimeElement = document.getElementById('reading-time');
  if (readingTimeElement) {
    const postContent = document.querySelector('.post-content');
    if (postContent) {
      const text = postContent.textContent || postContent.innerText;
      const wordsPerMinute = 200;
      const words = text.trim().split(/\s+/).length;
      const readingTime = Math.ceil(words / wordsPerMinute);
      
      readingTimeElement.textContent = `${readingTime} min read`;
    }
  }
}

// Initialize mobile navigation
function initMobileNavigation() {
  const navTrigger = document.getElementById('nav-trigger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navTrigger && navMenu) {
    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navTrigger.checked = false;
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navTrigger.checked && !navMenu.contains(e.target) && e.target !== navTrigger) {
        navTrigger.checked = false;
      }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navTrigger.checked) {
        navTrigger.checked = false;
      }
    });
  }
}

// Initialize newsletter form
function initNewsletterForm() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        // This is a placeholder - in real implementation, you'd send to your newsletter service
        alert('Thank you for subscribing! (This is a demo - please integrate with your newsletter service)');
        this.reset();
      }
    });
  }
}

// Initialize contact form
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // This is a placeholder - in real implementation, you'd send to your form handler
      console.log('Contact form data:', data);
      alert('Thank you for your message! (This is a demo - please integrate with your form handler)');
      this.reset();
    });
  }
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add copy to clipboard buttons for code blocks
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.className = 'copy-button';
    button.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: #4a9eff;
      color: white;
      border: none;
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.8rem;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    // Show button on hover
    pre.addEventListener('mouseenter', () => {
      button.style.opacity = '1';
    });
    
    pre.addEventListener('mouseleave', () => {
      button.style.opacity = '0';
    });
    
    // Copy functionality
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
        button.textContent = 'Failed';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }
    });
  });
}

// Social sharing functionality
function sharePost(platform, url, title) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };
  
  if (shareUrls[platform]) {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  }
}

// GitHub Issues comments integration
class GitHubComments {
  constructor(repository, issueNumber) {
    this.repository = repository;
    this.issueNumber = issueNumber;
    this.apiUrl = `https://api.github.com/repos/${repository}/issues/${issueNumber}/comments`;
  }
  
  async loadComments() {
    try {
      const response = await fetch(this.apiUrl);
      const comments = await response.json();
      
      return comments.map(comment => ({
        id: comment.id,
        author: comment.user.login,
        avatar: comment.user.avatar_url,
        body: comment.body,
        date: new Date(comment.created_at).toLocaleDateString(),
        html_url: comment.html_url
      }));
    } catch (error) {
      console.error('Error loading comments:', error);
      return [];
    }
  }
  
  async renderComments(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const comments = await this.loadComments();
    
    if (comments.length === 0) {
      container.innerHTML = '<p>No comments yet. Be the first to comment!</p>';
      return;
    }
    
    const commentsHtml = comments.map(comment => `
      <div class="comment">
        <div class="comment-header">
          <img src="${comment.avatar}" alt="${comment.author}" class="comment-avatar">
          <div class="comment-meta">
            <strong>${comment.author}</strong>
            <span class="comment-date">${comment.date}</span>
          </div>
        </div>
        <div class="comment-body">
          ${this.parseMarkdown(comment.body)}
        </div>
      </div>
    `).join('');
    
    container.innerHTML = commentsHtml;
  }
  
  parseMarkdown(text) {
    // Basic markdown parsing for comments
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }
}

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Search functionality (basic client-side search)
class BlogSearch {
  constructor() {
    this.posts = [];
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    
    if (this.searchInput) {
      this.init();
    }
  }
  
  async init() {
    // Load posts data (this would be generated by Jekyll)
    try {
      const response = await fetch('/search.json');
      this.posts = await response.json();
    } catch (error) {
      console.error('Error loading search data:', error);
    }
    
    this.searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });
  }
  
  performSearch(query) {
    if (!query.trim()) {
      this.searchResults.innerHTML = '';
      return;
    }
    
    const results = this.posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    this.renderResults(results);
  }
  
  renderResults(results) {
    if (results.length === 0) {
      this.searchResults.innerHTML = '<p>No results found.</p>';
      return;
    }
    
    const resultsHtml = results.map(post => `
      <div class="search-result">
        <h3><a href="${post.url}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <small>${post.date}</small>
      </div>
    `).join('');
    
    this.searchResults.innerHTML = resultsHtml;
  }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new BlogSearch();
});

// Performance optimization: defer non-critical JavaScript
window.addEventListener('load', function() {
  // Initialize non-critical features after page load
  console.log('Page fully loaded, initializing non-critical features...');
});