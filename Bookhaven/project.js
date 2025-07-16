const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const ection = document.querySelector('section');
const mainContent = document.getElementById('content');
const nav = document.getElementById('nav-bar')
const sign = document.getElementById('h-one');
const lose = document.getElementById('close')
const hs = document.getElementById('hss')
const loses = document.getElementById('close1')
const foot = document.getElementById('footer')
const foote = document.getElementById('footer-social')
const footer = document.getElementById('footer-copyright')
const details = document.getElementById('thrillers-details')
const categories = document.querySelectorAll(".category");
const bookLists = document.querySelectorAll(".book-list");
const thrill = document.getElementById('thrillers');
const thrille = document.getElementById('thrillers-list');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

btnPopup.addEventListener('click', () => {
   mainContent.style.display = 'none'; // Hide the main content
    section.style.display = 'none';    // Hide the section
   nav.style.display = 'none';
   hs.style.display = 'none' ;
   foot.style.display = 'none' ;
   foote.style.display = 'none' ;
   footer.style.display = 'none' ;
  

  });

sign.addEventListener('click', () => {
   mainContent.style.display = 'none'; // Hide the main content
    section.style.display = 'none';    // Hide the section
   nav.style.display = 'none';
   hs.style.display = 'none' ;
   foot.style.display = 'none' ;
   foote.style.display = 'none' ;
   footer.style.display = 'none' ;
  
   wrapper.classList.add('active-popup');
  });

lose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    mainContent.style.display = ''; // Hide the main content
    section.style.display = '';    // Hide the section
   nav.style.display = '';
   hs.style.display = '' ;
   foot.style.display = '' ;
   foote.style.display = '' ;
   footer.style.display = '' ;
});

loses.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    mainContent.style.display = ''; // Hide the main content
    section.style.display = '';    // Hide the section
   nav.style.display = '';
   hs.style.display = '' ;
   foot.style.display = '' ;
   foote.style.display = '' ;
   footer.style.display = '' ;
   
});



   