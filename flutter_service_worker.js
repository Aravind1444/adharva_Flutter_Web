'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "79891d92f4a69a6586369e76ea6c0095",
"/assets\FontManifest.json": "4ab2485a16e5f4ba64524a14486b13fb",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\OpenSansCondensed-Light.ttf": "3589bddbe338e444d408f4dbc545ca1e",
"/assets\fonts\Orbitron-Black.ttf": "c5897341462fb76703966c6435d793e1",
"/assets\fonts\Orbitron-Bold.ttf": "10f7e47e03d643322767ef44e44b3f3b",
"/assets\fonts\Orbitron-ExtraBold.ttf": "8044a45c1f52ed1ae13657fd00299f83",
"/assets\fonts\Orbitron-Medium.ttf": "cd1bbab8d68f774c6685854b41859ab3",
"/assets\fonts\Orbitron-Regular.ttf": "add0c4244a015960586eeb51f091fd71",
"/assets\fonts\Orbitron-SemiBold.ttf": "770d5f20ec1e36c4b1019b23822847fa",
"/assets\images\adharva.jpg": "0cd6e1626b3558473480690ee56fd703",
"/assets\LICENSE": "37c5bb211c5fcf96263fc239ed456a3b",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "b0651a65ee89fe12f0331d71466b6a5a",
"/main.dart.js": "2e534394092b852ddbdec68eb32dddd3",
"/manifest.json": "94e3b05e098957dc4f5dd41db87275a9"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
