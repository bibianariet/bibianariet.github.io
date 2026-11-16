(() => {
  const link = document.querySelector('[data-resume-download]');
  if (!link) return;
  const englishHref = link.getAttribute('href');
  const englishDownload = link.getAttribute('download') || '';
  const portugueseFile = 'Bibiana_Riet_Curriculo_Artistico_PT_Revisado.pdf';

  function updateResumeDownload() {
    const portuguese = document.documentElement.lang.toLowerCase().startsWith('pt');
    link.setAttribute('href', portuguese ? portugueseFile : englishHref);
    link.setAttribute('download', portuguese ? portugueseFile : englishDownload);
    link.setAttribute('hreflang', portuguese ? 'pt-BR' : 'en');
  }

  document.addEventListener('languagechange', updateResumeDownload);
  window.addEventListener('pageshow', updateResumeDownload);
  updateResumeDownload();
})();
