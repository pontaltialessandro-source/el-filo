// Nav mobile
const toggle=document.getElementById('navToggle');
const nav=document.getElementById('menuNav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open);
    toggle.setAttribute('aria-label',open?'Chiudi menù':'Apri menù');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');
  }));
  addEventListener('keydown',e=>{
    if(e.key==='Escape'&&nav.classList.contains('open')){
      nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Apri menù');
    }
  });
}
// Foto a dissolvenza (Chi siamo)
document.querySelectorAll('.slideshow').forEach(box=>{
  const foto=box.querySelectorAll('img');
  if(foto.length<2) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i=0,timer=null;
  const ferma=()=>{clearInterval(timer);timer=null};
  const avanza=()=>{
    foto[i].classList.remove('on');
    i=(i+1)%foto.length;
    foto[i].classList.add('on');
  };
  const parti=()=>{ferma();timer=setInterval(avanza,5000)};
  parti();
  // niente lavoro inutile quando la scheda non è in primo piano
  document.addEventListener('visibilitychange',()=>document.hidden?ferma():parti());
});
// Scroll reveal
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
