const scroll = () => {
  document.body.addEventListener('click', (event) => {
      let target = event.target,
        anchors = target.closest('a[href*="#"]');
  
      if (target.matches('.close-btn') || target.matches('.portfolio-btn') ||
        target.closest('footer')) {
        return;
      }
  
      if (anchors) {
        if (anchors.matches('a[href*="#"]')) {
          event.preventDefault();
          const blockID = anchors.getAttribute('href').substr(1);
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
}

  export default scroll;