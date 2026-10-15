// Keep the native YouTube player, loading it shortly before it enters view.
(()=>{
 const frames=[...document.querySelectorAll('iframe[data-video-src]')];
 const load=frame=>{if(!frame.hasAttribute('src'))frame.src=frame.dataset.videoSrc};
 if(!('IntersectionObserver' in window)){frames.forEach(load);return;}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting&&!entry.target.closest('[hidden]'))load(entry.target);
 }),{rootMargin:'250px 0px'});
 frames.forEach(frame=>observer.observe(frame));
})();
