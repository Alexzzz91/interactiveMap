importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyC57sXo54ANx-awXvGs1TZu6UBvQ1XJ_VI",
    authDomain: "findpersoninmap.firebaseapp.com",
    projectId: "findpersoninmap",
    storageBucket: "findpersoninmap.appspot.com",
    messagingSenderId: "916811003939",
    appId: "1:916811003939:web:ec83b1b94d8d1c1e949996"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const showNotification = (data) => {
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon ?? '/img/64.png'
    })
}

messaging.setBackgroundMessageHandler((event) => {
    const dataNotification = JSON.parse(event?.data.text() || '{}');
    const data = JSON.parse(dataNotification?.data.notification || '{}');
    event?.waitUntil(showNotification(data));
});

self.addEventListener('push', (event) => {
    try {
        const dataNotification = JSON.parse(event?.data.text() || '{}');
        const data = JSON.parse(dataNotification?.data.notification || '{}');
        event?.waitUntil(showNotification(data));
    } catch (error) {}
});

self.addEventListener('notificationclick',  (event) => {
    event?.notification.close();
    event?.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
        if (clientList.length > 0) {
          let client = clientList[0]
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i]
            }
          }
          return client.focus();
        }
        return self.clients.openWindow('/');
      })
    )
});