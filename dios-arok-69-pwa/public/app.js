
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker regisztrálva:', reg.scope))
    .catch(err => console.error('SW hiba:', err));
}
