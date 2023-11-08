import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import type { HTMLAttributes } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Login } from '../components/login';
import { SignUp } from '../components/signup';

import 'swiper/css';

export function Modal({ onClick }: HTMLAttributes<Element>): JSX.Element {
  return (
    <IonContent className="pt-11 [--padding-top:44px]">
      <IonHeader collapse="fade" slot="fixed" translucent>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClick}>
              <IonIcon color="medium" icon={closeCircle} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Swiper className="h-full" slidesPerView={1}>
        <SwiperSlide>
          <Login />
        </SwiperSlide>
        <SwiperSlide>
          <SignUp />
        </SwiperSlide>
      </Swiper>
    </IonContent>
  );
}
