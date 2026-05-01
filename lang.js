function setLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
  var path = window.location.pathname;
  
  if (lang === 'ar') {
    if (path === '/' || path === '' || path === '/index.html') {
      window.location.href = '/ar';
    } else if (path.startsWith('/project/')) {
      window.location.href = '/ar' + path;
    } else if (!path.startsWith('/ar')) {
      window.location.href = '/ar' + path;
    }
  } else {
    if (path.startsWith('/ar')) {
      var newPath = path.replace(/^\/ar/, '');
      window.location.href = newPath || '/';
    }
  }
}

function toggleLanguage() {
  var path = window.location.pathname;
  var stored = localStorage.getItem('portfolio-lang');
  var currentIsArabic = path.startsWith('/ar');
  var newLang = currentIsArabic ? 'en' : 'ar';
  setLang(newLang);
}

function initLang() {
  var path = window.location.pathname;
  if (!path.startsWith('/ar') && path !== '/' && path !== '' && path !== '/index.html' && !path.startsWith('/project/')) {
    return;
  }
  
  var stored = localStorage.getItem('portfolio-lang');
  
  if (stored === 'ar' && path === '/') {
    setLang('ar');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}

function openLightbox(src, alt) {
  var lightbox = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  if (!lightbox || !img) return;
  img.src = src;
  img.alt = alt || '';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleMobileMenu() {
  var nav = document.getElementById('mainNav');
  if (nav) {
    nav.classList.toggle('active');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}