document.querySelectorAll('.scene-carousel').forEach(carousel=>{
 const slides=[...carousel.querySelectorAll('article')],prev=carousel.querySelector('.scene-prev'),next=carousel.querySelector('.scene-next'),position=carousel.querySelector('.scene-position');
 if(!slides.length)return;let active=0;
 function render(){slides.forEach((slide,i)=>slide.hidden=i!==active);position.textContent=`${active+1} / ${slides.length}`;}
 function move(step){const frame=slides[active].querySelector('iframe');if(frame){if(frame.dataset.videoSrc)frame.removeAttribute('src');else frame.src=frame.src;}active=(active+step+slides.length)%slides.length;render();}
 function labels(){const pt=document.documentElement.lang.startsWith('pt');prev.setAttribute('aria-label',pt?'Vídeo anterior':'Previous video');next.setAttribute('aria-label',pt?'Próximo vídeo':'Next video');}
 prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));document.addEventListener('languagechange',labels);
 carousel.classList.add('is-ready');prev.hidden=next.hidden=position.hidden=false;labels();render();
});
