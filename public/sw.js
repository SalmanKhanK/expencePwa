console.log("Running service worker")


var cacheData = 'appV1';
this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheData)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll([
          '/',
          "/static/js/main.chunk.js",
          "/static/js/0.chunk.js",
          "/static/js/bundle.js",
          "/index.js"
        ]);
      })
  );
});
this.addEventListener('fetch', function(event) {
  if(!navigator.onLine){
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          let responceUrl=event.request.clone();
          return fetch(responceUrl)
        }
      )
    );
  }

  });