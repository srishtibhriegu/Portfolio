document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

  function showSidebar(){
    const sidebar = document.querySelector( ".sidebar" )
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector( ".sidebar" )
    sidebar.style.display = 'none'
  }