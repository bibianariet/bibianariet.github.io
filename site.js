const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
if(menu&&nav){
 const setOpen=open=>{menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)};
 menu.addEventListener('click',()=>setOpen(menu.getAttribute('aria-expanded')!=='true'));
 nav.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false)});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setOpen(false);menu.focus()}});
}
const lightbox=document.querySelector('#lightbox');if(lightbox){document.querySelectorAll('.photo').forEach(button=>button.addEventListener('click',()=>{lightbox.querySelector('img').src=button.querySelector('img').src;lightbox.showModal()}));lightbox.querySelector('.close').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()})}
