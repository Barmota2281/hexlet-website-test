import motion from 'https://cdn.jsdelivr.net/npm/motion@11.17.0/+esm'
import { animate, stagger } from "motion"




// для секции about_hexlet
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.about_hexlet__head *',);
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate('.about_hexlet__head *', { x: ['-500px', '0px'], opacity:['0%', '100%'] }, {duration: 1,  delay :stagger(0.07) } );
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((el) => observer.observe(el));
  });


  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.about_hexlet__advantages *',);
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate('.about_hexlet__advantages *', { x: ['-500px', '0px'], opacity:['0%', '100%'] }, {duration: 0.7,  delay :stagger(0.07) } );
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((el) => observer.observe(el));
  });

  //для секции 

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.details_up, .details_down',);
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate('.details_up, .details_down', { y: ['-50px', '0px'], opacity:['0%','50%', '100%'] }, {duration: 1,  delay :stagger(0.7) } );
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((el) => observer.observe(el));
  });

//для секции consultation


  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.consultation__form *',);
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate('.consultation__form *', { y: ['-50px', '0px'], opacity:['0%', '50%', '100%'] }, {duration: 0.7,  delay :stagger(0.1) } );
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((el) => observer.observe(el));
  });