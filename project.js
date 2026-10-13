const projectPhotos=[...document.querySelectorAll('.project-photo')];
document.querySelector('.viewer-close').innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>';
// Use geometric chevrons so the icons remain centered independently of font metrics.
document.querySelectorAll('.track-prev,.track-next,.viewer-prev,.viewer-next').forEach(button=>{
    const previous=button.matches('.track-prev,.viewer-prev');
    button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="'+(previous?'M15 5 8 12l7 7':'M9 5l7 7-7 7')+'"/></svg>';
});
const track=document.querySelector('.project-photo-track');
document.querySelector('.track-prev').addEventListener('click',()=>track.scrollBy({left:-track.clientWidth,behavior:'smooth'}));
document.querySelector('.track-next').addEventListener('click',()=>track.scrollBy({left:track.clientWidth,behavior:'smooth'}));
const viewer=document.querySelector('#project-lightbox');let photoIndex=0;
function displayPhoto(index){photoIndex=(index+projectPhotos.length)%projectPhotos.length;const source=projectPhotos[photoIndex].querySelector('img');viewer.querySelector('img').src=source.src;viewer.querySelector('img').alt=source.alt}
projectPhotos.forEach((button,index)=>button.addEventListener('click',()=>{displayPhoto(index);viewer.showModal()}));
document.querySelector('.viewer-close').addEventListener('click',()=>viewer.close());
document.querySelector('.viewer-prev').addEventListener('click',()=>displayPhoto(photoIndex-1));
document.querySelector('.viewer-next').addEventListener('click',()=>displayPhoto(photoIndex+1));
viewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();displayPhoto(photoIndex-1)}if(event.key==='ArrowRight'){event.preventDefault();displayPhoto(photoIndex+1)}});
viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close()});
