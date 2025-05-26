/**
 * Scholarship Tracking System - Frontend JavaScript
 * Capstone Demo Version
 *
 * This file contains all the interactive functionality for the demo
 */

// Global variables
const isLoading = false

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎓 Scholarship Tracking System - Frontend Initialized")

  // Initialize page-specific functionality
  initializePage()

  // Add smooth scrolling for anchor links
  initializeSmoothScrolling()

  // Initialize form validations
  initializeFormValidations()

  // Add loading states to forms
  initializeLoadingStates()
})

/**
 * Initialize page-specific functionality based on current page
 */
function initializePage() {
  const currentPage = getCurrentPage()

  switch (currentPage) {
    case "login":
      initializeLoginPage()
      break
    case "dashboard":
      initializeDashboard()
      break
    case "recover":
      initializeRecoverPage()
      break
  }
}

/**
 * Get current page identifier
 */
function getCurrentPage() {
  if (document.body.classList.contains("login-page")) {
    return "login"
  } else if (document.body.classList.contains("dashboard-page")) {
    return "dashboard"
  } else if (document.querySelector(".login-page")) {
    return "recover"
  }
  return "unknown"
}

/**
 * Login Page Functionality
 */
function initializeLoginPage() {
  console.log("Initializing login page...")

  // Focus on username field
  const usernameField = document.getElementById("username")
  if (usernameField) {
    usernameField.focus()
  }

  // Add enter key support for password field
  const passwordField = document.getElementById("password")
  if (passwordField) {
    passwordField.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const form = this.closest("form")
        if (form) {
          form.submit()
        }
      }
    })
  }
}

/**
 * Dashboard Functionality
 */
function initializeDashboard() {
  console.log("Initializing dashboard...")

  // Add click animations to action cards
  const actionCards = document.querySelectorAll(".action-card")
  actionCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.98)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)
    })
  })

  // Initialize notification interactions
  initializeNotifications()

  // Auto-refresh notifications every 30 seconds (demo simulation)
  // TODO: Replace with actual WebSocket or polling implementation
  setInterval(simulateNotificationUpdate, 30000)
}

/**
 * Password Recovery Page Functionality
 */
function initializeRecoverPage() {
  console.log("Initializing recovery page...")

  // Focus on email field if present
  const emailField = document.getElementById("email")
  if (emailField) {
    emailField.focus()
  }
}

/**
 * Toggle password visibility
 */
function togglePassword() {
  const passwordField = document.getElementById("password")
  const passwordIcon = document.getElementById("password-icon")

  if (passwordField && passwordIcon) {
    if (passwordField.type === "password") {
      passwordField.type = "text"
      passwordIcon.className = "fas fa-eye-slash"
    } else {
      passwordField.type = "password"
      passwordIcon.className = "fas fa-eye"
    }
  }
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  if (mobileMenu) {
    mobileMenu.classList.toggle("active")
  }
}

/**
 * Show coming soon message for demo features
 */
function showComingSoon(featureName) {
  // Create and show a temporary notification
  showNotification(`${featureName} feature coming soon!`, "info")

  // TODO: Replace with actual navigation to feature pages
  console.log(`Navigation to ${featureName} would be implemented here`)
}

/**
 * Show temporary notification
 */
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `temp-notification ${type}`
  notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
    `

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        border-left: 4px solid #3b82f6;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `

  // Add to page
  document.body.appendChild(notification)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

/**
 * Initialize notification interactions
 */
function initializeNotifications() {
  const notificationItems = document.querySelectorAll(".notification-item")

  notificationItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Add click effect
      this.style.transform = "scale(0.98)"
      setTimeout(() => {
        this.style.transform = ""
      }, 150)

      // TODO: Implement notification detail view
      console.log("Notification clicked - would show details")
    })
  })
}

/**
 * Simulate notification updates for demo
 */
function simulateNotificationUpdate() {
  // TODO: Replace with actual API calls
  console.log("Simulating notification update...")

  // This would typically fetch new notifications from the server
  // For demo purposes, we just log the action
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

/**
 * Initialize form validations
 */
function initializeFormValidations() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      if (!validateForm(this)) {
        e.preventDefault()
        return false
      }
    })

    // Add real-time validation for inputs
    const inputs = form.querySelectorAll("input[required]")
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateInput(this)
      })

      input.addEventListener("input", function () {
        clearInputError(this)
      })
    })
  })
}

/**
 * Validate form before submission
 */
function validateForm(form) {
  let isValid = true
  const inputs = form.querySelectorAll("input[required]")

  inputs.forEach((input) => {
    if (!validateInput(input)) {
      isValid = false
    }
  })

  return isValid
}

/**
 * Validate individual input
 */
function validateInput(input) {
  const value = input.value.trim()
  let isValid = true
  let errorMessage = ""

  // Required field validation
  if (input.hasAttribute("required") && !value) {
    isValid = false
    errorMessage = "This field is required"
  }

  // Email validation
  if (input.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      isValid = false
      errorMessage = "Please enter a valid email address"
    }
  }

  // Password validation (minimum length)
  if (input.type === "password" && value && value.length < 6) {
    isValid = false
    errorMessage = "Password must be at least 6 characters long"
  }

  // Show/hide error
  if (!isValid) {
    showInputError(input, errorMessage)
  } else {
    clearInputError(input)
  }

  return isValid
}

/**
 * Show input error
 */
function showInputError(input, message) {
  clearInputError(input)

  input.style.borderColor = "#dc2626"

  const errorElement = document.createElement("div")
  errorElement.className = "input-error"
  errorElement.textContent = message
  errorElement.style.cssText = `
        color: #dc2626;
        font-size: 12px;
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 4px;
    `

  input.parentNode.appendChild(errorElement)
}

/**
 * Clear input error
 */
function clearInputError(input) {
  input.style.borderColor = ""

  const errorElement = input.parentNode.querySelector(".input-error")
  if (errorElement) {
    errorElement.remove()
  }
}

/**
 * Initialize loading states for forms
 */
function initializeLoadingStates() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", function () {
      const submitButton = this.querySelector('button[type="submit"]')
      if (submitButton) {
        setButtonLoading(submitButton, true)
      }
    })
  })
}

/**
 * Set button loading state
 */
function setButtonLoading(button, loading) {
  if (loading) {
    button.disabled = true
    button.classList.add("loading")

    const originalText = button.querySelector(".btn-text")
    if (originalText) {
      originalText.textContent = "Loading..."
    }

    const icon = button.querySelector(".btn-icon")
    if (icon) {
      icon.className = "fas fa-spinner fa-spin btn-icon"
    }
  } else {
    button.disabled = false
    button.classList.remove("loading")

    // Reset button text and icon would be handled by page reload
  }
}

/**
 * Utility function to format dates
 */
function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Add CSS animations dynamically
 */
function addAnimationStyles() {
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .temp-notification {
            animation: slideInRight 0.3s ease-out;
        }
    `
  document.head.appendChild(style)
}

// Initialize animation styles
addAnimationStyles()

// Global error handler
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
  // TODO: Implement error reporting in production
})

// Console welcome message
console.log(`
🎓 Scholarship Tracking System
📚 Capstone Demo Version
🔧 Frontend JavaScript Loaded Successfully

Demo Features:
- Interactive login with hardcoded credentials
- Responsive dashboard with sample data
- Password recovery simulation
- Mobile-friendly navigation
- Form validations and animations

For development:
- Check browser console for debug information
- All demo data is hardcoded for presentation
- Backend integration points are marked with TODO comments
`)
