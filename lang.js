const translations = {
  en: {
    about_me: "I'm a systems-oriented engineer specializing in building robust business logic applications. Rather than focusing on tools, I solve complex problems—from precise payroll calculations to secure multi-role authentication systems. I build applications that handle real financial data with accuracy and security.",
    projects: 'Projects',
    contact: 'Contact',
    home: 'Home',
    about: 'About',
    about_title: 'About Me',
    download: 'Download',
    demo: 'Live Demo',
    source: 'Source Code',
    features: 'Features',
    tech_stack: 'Tech Stack',
    info: 'Project Info',
    email: 'Email',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    footer_copyright: '© 2026 Ahmed Abobakr. All rights reserved.',
    view_project: 'View Project',
    view_details: 'View Details',
    inquire_now: 'Inquire Now',
    software_engineer: 'Software Engineer',
    langBtn: 'عربي',
  },
  ar: {
    about_me: 'أنا مهندس متخصص في بناء تطبيقات الأعمال المنطقية القوية. بدلاً من التركيز على الأدوات، أحل المشاكل المعقدة—من حسابات الرواتب الدقيقة إلى أنظمة المصادقة متعددة الأدوار. أبني تطبيقات تتعامل مع البيانات المالية الحقيقية بدقة وأمان.',
    projects: 'المشاريع',
    contact: 'تواصل معي',
    home: 'الرئيسية',
    about: 'عني',
    about_title: 'من أنا',
    download: 'تحميل',
    demo: 'تجربة',
    source: 'الكود المصدري',
    features: 'المميزات',
    tech_stack: 'التقنيات',
    info: 'معلومات المشروع',
    email: 'البريد الإلكتروني',
    whatsapp: 'واتساب',
    github: 'جيثب',
    linkedin: 'لينكد إن',
    footer_copyright: '© 2026 أحمد أبو بكر. جميع الحقوق محفوظة.',
    view_project: 'عرض المشروع',
    view_details: 'عرض التفاصيل',
    inquire_now: 'تواصل الآن',
    software_engineer: 'مهندس برمجيات',
    langBtn: 'English',
  }
};

function getStoredLang() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') || localStorage.getItem('portfolio-lang') || 'en';
}

function setStoredLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
}

function translatePage(lang) {
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
  
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'عربي' : 'English';
    langBtn.href = '?lang=' + (lang === 'en' ? 'ar' : 'en');
  }
}

function toggleLanguage() {
  const currentLang = getStoredLang();
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  setStoredLang(newLang);
  translatePage(newLang);
}

function initLang() {
  const lang = getStoredLang();
  setStoredLang(lang);
  translatePage(lang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}