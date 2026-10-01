// Small "reveal on scroll" effect for elements with .reveal
(function(){
  const els = document.querySelectorAll('.reveal');
  const show = (el)=> el.classList.add('show');

  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if (e.isIntersecting) show(e.target); });
    }, { threshold: 0.15 });

    els.forEach(el => io.observe(el));
  } else {
    // Fallback: show immediately
    els.forEach(show);
  }
})();
