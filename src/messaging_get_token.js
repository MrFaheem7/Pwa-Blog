// import { getMessaging, getToken } from "firebase/messaging";

// // Get registration token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// const messaging = getMessaging();
// getToken(messaging, { vapidKey: 'BGjJP6OcM6eY2axR1_lasJdS88JvFFBTAhQCKYvoGNxdsQ4lIOk-ieRy0OKn0bTpEmwI3li3xdb5JmS01LHdKzI' }).then((currentToken) => {
//     if (currentToken) {
//         // Send the token to your server and update the UI if necessary
//         console.log('tokenn:', currentToken)
//         // ...
//     } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//         // ...
//     }
// }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // ...
// });