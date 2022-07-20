import { 
    getMessaging, 
    getToken, 
} from "firebase/messaging";

const permissions = {
    DENIED: 'denied',
    DEFAULT: 'default',
    GRANTED: 'granted',
  };

export const getCanRequest = () => Notification.permission === permissions.DEFAULT;
export const isSubscriptionGranted = () => Notification.permission === permissions.GRANTED;
export const isSubscriptionDenied = () => Notification.permission === permissions.DENIED;

export const initFirebaseMessagingRegistration = (setDeviceTokens: (token: string) => void) => {
  const firebaseCloudMessaging = {
      init: async function () {
        const messaging = getMessaging();
        try {
          const status = await Notification.requestPermission();

          if (status && status === permissions.GRANTED) {
            const fcm_token = await getToken(messaging);

            if (fcm_token) {
              try {
                setDeviceTokens(fcm_token);
              } catch (error) {
                console.error(error);
              }
              return fcm_token;
            }
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
  };

  return firebaseCloudMessaging.init().then(token => console.log(token));
};