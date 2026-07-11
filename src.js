const header=document.querySelector('.nav'),menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40));
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('section:not(.hero),.service-grid article,.gallery figure').forEach(el=>observer.observe(el));
