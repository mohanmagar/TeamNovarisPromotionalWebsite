(function(){
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if(menuBtn && nav){
    menuBtn.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
      menuBtn.setAttribute('aria-expanded','false');
    }));
  }

  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}
    }),{threshold:.08});
    reveals.forEach(el=>obs.observe(el));
  } else reveals.forEach(el=>el.classList.add('is-visible'));

  const printBtn = document.querySelector('[data-print]');
  if(printBtn) printBtn.addEventListener('click',()=>window.print());

  const year = document.querySelector('#year');
  if(year) year.textContent = new Date().getFullYear();
})();
