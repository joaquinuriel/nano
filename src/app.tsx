import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  AuthProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from 'reactfire';
import { Tabs } from './tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/index.css';
import './theme/variables.css';

setupIonicReact({
  mode: 'ios',
});

export function App(): JSX.Element {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const fire = getFirestore(app);
  const store = getStorage(app);
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={fire}>
        <StorageProvider sdk={store}>
          <IonApp>
            <IonReactRouter>
              <Tabs />
            </IonReactRouter>
          </IonApp>
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}
