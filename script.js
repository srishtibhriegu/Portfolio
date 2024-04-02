document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('.about-link');
    var projectLink = document.querySelector('.project-link');
    var contactlink = document.querySelector('.contact-link');
    var aboutSection = document.querySelector('.about');
    var projectSection = document.querySelector('.project');
    var contactSection = document.querySelector('.contact');
    
    aboutLink.addEventListener('click', function(event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectLink.addEventListener('click', function(event) {
      event.preventDefault();
      projectSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactlink.addEventListener('click', function(event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
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