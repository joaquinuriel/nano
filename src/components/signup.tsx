import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  useIonToast,
} from '@ionic/react';
import { useStore } from '@nanostores/react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import type { ReactFireError } from 'reactfire';
import { useAuth, useFirestore } from 'reactfire';
import { useSwiper } from 'swiper/react';
import { $email, $name, $pword } from '../state/account';

export function SignUp(): JSX.Element {
  const auth = useAuth();
  const fire = useFirestore();

  const name = useStore($name);
  const email = useStore($email);
  const pword = useStore($pword);

  const swiper = useSwiper();

  const [toast] = useIonToast();

  function submit(): void {
    createUserWithEmailAndPassword(auth, email, pword)
      .then(async (e) => {
        const user = doc(fire, 'users', e.user.uid);
        const [data] = e.user.providerData;
        await updateDoc(user, data as object);
        await updateProfile(e.user, { displayName: name });
        return toast(`Welcome ${e.user.email}`, 1000);
      })
      .catch((e: ReactFireError) => toast(e.message, 1000));
  }

  return (
    <>
      <IonList inset>
        <IonItem color="light">
          <IonInput
            autocomplete="name"
            onIonChange={(e) => {
              $name.set(e.detail.value || '');
            }}
            placeholder="name"
            value={name}
          />
          <IonInput autocomplete="family-name" placeholder="family-name" />
        </IonItem>
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
      <div
      // className="absolute inset-0 top-auto"
      >
        <IonButton className="ion-margin" expand="block" onClick={submit}>
          Sign Up
        </IonButton>
        <IonButton
          className="ion-margin"
          color="light"
          expand="block"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <IonLabel>Log in</IonLabel>
        </IonButton>
      </div>
    </>
  );
}
