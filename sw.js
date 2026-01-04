self.addEventListener('fetch', function(event) {
  // Esto permite que la app cargue contenido
  event.respondWith(fetch(event.request));
});