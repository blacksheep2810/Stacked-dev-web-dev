document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('offlineBanner');

  // Show banner when offline
  window.addEventListener('offline', () => {
    banner.classList.add('show');
  });

  // Hide banner again when back online
  window.addEventListener('online', () => {
    banner.classList.remove('show');
  });
});
