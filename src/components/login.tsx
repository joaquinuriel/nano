import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRouterLink,
  useIonToast,
} from '@ionic/react';
import { useStore } from '@nanostores/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import type { ReactFireError } from 'reactfire';
import { useAuth, useFirestore, useUser } from 'reactfire';
import { useSwiper } from 'swiper/react';
import { $email, $pword } from '../state/account';

export function Login(): JSX.Element {
  const swiper = useSwiper();
  const auth = useAuth();
  const email = useStore($email);
  const pword = useStore($pword);

  const [toast] = useIonToast();
  
  
  const fire = useFirestore();

  function submit(): void {
    signInWithEmailAndPassword(auth, email, pword).then(
      (e) => {
        void toast(`Welcome ${e.user.email}`, 1000);
        // const ref = doc(fire, 'users', e.user.uid);
        console.log(e.user.toJSON());
        // updateDoc(ref, {});
      },
      (e: ReactFireError) => toast(e.message, 1000),
    );
  }

  return (
    <>
      <IonList inset>
        <IonItem color="light">
          <IonInput
            autocomplete="email"
            onIonChange={(e) => {
              $email.set(e.detail.value || '');
            }}
            placeholder="email"
            type="email"
            value={email}
          />
        </IonItem>
        <IonItem color="light">
          <IonInput
            counter
            onIonChange={(e) => {
              $pword.set(e.detail.value || '');
            }}
            placeholder="password"
            type="password"
            value={pword}
          />
        </IonItem>
      </IonList>
      <div className="flex justify-end mx-4">
        <IonNote>
          Forgot password?{' '}
          <IonRouterLink routerLink="/reset">Reset</IonRouterLink>
        </IonNote>
      </div>
      <div
      // className="absolute inset-0 top-auto"
      >
        <IonButton className="ion-margin" expand="block" onClick={submit}>
          Log in
        </IonButton>
        <IonButton
          className="ion-margin"
          color="light"
          expand="block"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <IonLabel>Sign Up</IonLabel>
        </IonButton>
      </div>
    </>
  );
}
