import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from '@ionic/react';
import { person } from 'ionicons/icons';
import { useRef } from 'react';
import { useFirestore, useUser } from 'reactfire';
import { ExploreContainer } from '../components/explore-container';
import { Modal } from './modal';

// import 'swiper/css/bundle';
import './home.css';

export function Home(): JSX.Element {
  const page = useRef();
  // const fire = useFirestore();

  const { data } = useUser();
  // const user = doc(fire, 'users', data?.uid || "");
  // const info = useFirestoreDocData(user);

  const _slides = Array.from({ length: 50 }).map(
    (el, index) => `Slide ${index + 1}`,
  );

  const [present, dismiss] = useIonModal(data ? Modal : Modal, {
    onClick() {
      dismiss();
    },
  });

  function showProfile(): void {
    present({ presentingElement: page.current });
  }

  return (
    <IonPage ref={page}>
      <IonHeader collapse="fade" translucent>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
          <IonButtons collapse slot="end">
            <IonButton onClick={showProfile}>
              <IonIcon icon={person} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
            <IonButtons collapse slot="end">
              <IonButton
                color="light"
                fill="solid"
                onClick={showProfile}
                shape="round"
              >
                <IonIcon color="dark" icon={person} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonList inset>
          <IonItem>
            {/* <IonLabel>Hello {info.data.displayName}</IonLabel> */}
          </IonItem>
        </IonList>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
}
