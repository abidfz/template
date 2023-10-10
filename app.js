const links = document.querySelectorAll('.navbar__links li');
const navbar = document.querySelector('.navbar');
icons.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
});
links.forEach((link) => {
  link.addEventListener('click',() => {
      navbar.classList.remove('active');
    });
});