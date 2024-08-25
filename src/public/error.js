if (navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (var i = 0; i < registrations.length; i++) registrations[i].unregister();
  });
}
localStorage.clear();
sessionStorage.clear();
document.cookie = '';

