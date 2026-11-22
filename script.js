document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.mobile-toggle');const nav=document.getElementById('main-nav');
  toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');}));
  const form=document.getElementById('consultation-form');
  form?.addEventListener('submit',e=>{
    e.preventDefault();if(!form.reportValidity())return;
    const data=new FormData(form);
    const lines=['Hello RC BIM Solution, I would like a free consultation.', 'Name: '+data.get('name'),'Company: '+(data.get('company')||'-'),'Email: '+data.get('email'),'Phone: '+(data.get('phone')||'-'),'Project type: '+(data.get('project_type')||'-'),'Requirements: '+data.get('message')];
    window.open('https://wa.me/601128014233?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener,noreferrer');
  });
});