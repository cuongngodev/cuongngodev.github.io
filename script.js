/**
 * Portfolio Website JavaScript
 * This file handles theme toggling, mobile navigation, and typing animations
 */
 // Source: uicode channel -> https://www.youtube.com/watch?v=iuxTXPluP8E&list=PL01_nAWW7Scvw_vrH68vnlP8uEcoHV2kP

// ============================================
// THEME MANAGEMENT
// ============================================

/**
 * Load saved theme preference from localStorage
 * If user previously selected dark mode, apply it on page load
 */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

/**
 * Theme Toggle Functionality
 * Allows users to switch between light and dark themes
 * Saves preference to localStorage for persistence
 */
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.onclick = () => {
    // Toggle dark class on body
    document.body.classList.toggle("dark");

    // Save theme preference to localStorage
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };
}

// ============================================
// MOBILE NAVIGATION MENU
// ============================================

/**
 * Mobile Menu Toggle
 * Handles hamburger menu click to show/hide navigation on mobile devices
 * Also animates hamburger icon to X when menu is open
 */
const toggleBtn = document.querySelector('.togglebtn');
const navLinks = document.querySelector('.navlinks');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    // Toggle 'click' class to animate hamburger to X
    toggleBtn.classList.toggle('click');
    
    // Toggle 'active' class to slide menu in/out
    navLinks.classList.toggle('active');
  });
}

// ============================================
// TYPED.JS - DYNAMIC TEXT ANIMATION
// ============================================

/**
 * Initialize Typed.js for dynamic typing effect
 * Cycles through different developer roles in the hero section
 * Creates a typewriter effect that types and deletes text repeatedly
 * 
 * Configuration:
 * - strings: Array of text to cycle through
 * - typeSpeed: Speed of typing in milliseconds (lower = faster)
 * - backSpeed: Speed of deleting in milliseconds
 * - loop: Set to true to continuously cycle through strings
 */
var typed = new Typed(".hero-text-highlight", {
  strings: [
    "Full-stack Developer",
    "Software Developer"
  ],
  typeSpeed: 50,      // Typing speed (70ms per character)
  backSpeed: 60,      // Deleting speed (55ms per character)
  loop: true          // Continuously repeat the animation
});

