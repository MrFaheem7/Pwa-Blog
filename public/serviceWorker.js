// let chacheData = 'AppV1'
// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(chacheData).then((chache) => {
//             chache.addAll([
//                 '/static/js/bundle.js',
//                 '/favicon.ico',
//                 '/logo192.png',
//                 '/manifest.json',
//                 '/',
//                 '/users',
//                 '/about',
//                 'index.html',
//             ])
//         }
//         )
//     )
// })
// this.addEventListener('fetch', (event) => {
//     if (!navigator.onLine) {
//         event.respondWith(
//             caches.match(event.request).then((results) => {
//                 if (results) {
//                     return results
//                 }
//                 let reqUrl = event.request.clone()
//                 return fetch(reqUrl)
//             })
//         )
//     }


// })