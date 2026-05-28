 
 // Show and hide sidebar
 function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
      }

      function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
      }

// Change navbar background on scroll
window.onscroll = function() {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('navbar-scrolled');
  } else {
    nav.classList.remove('navbar-scrolled');
  }
};