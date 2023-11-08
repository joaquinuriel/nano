import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useStore } from '@nanostores/react';
import { animate } from 'motion';
import { atom } from 'nanostores';
import { useMemo, useState } from 'react';

import './Tab2.css';

const $focus = atom(false);
const $input = atom('');

export function Tab2(): JSX.Element {
  const _focus = useStore($focus);
  const _input = useStore($input);

  const [size, setSize] = useState<'large' | 'small' | undefined>('large');

  const _slides = useMemo(() => {
    return Array.from({ length: 5000 }).map(
      (el, index) => `Slide ${index + 1}`,
    );
  }, []);

  return (
    <IonPage>
      <IonHeader collapse="fade">
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size={size}>Tab 2</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              className="will-change-transform"
              onIonBlur={(e) => {
                $focus.set(false);
                animate('ion-header', { y: 0 });
                if (e.target.value) {
                  setSize(undefined);
                } else {
                  animate('ion-content', { y: 0 });
                }
              }}
              onIonClear={(_e) => {
                // $focus.set(false);
                // animate('ion-header', { y: 0 });
                // animate('ion-content', { y: 0 });
              }}
              onIonFocus={() => {
                $focus.set(true);
                animate('ion-header', { y: -44 });
                animate('ion-content', { y: -44 });
                setTimeout(() => {
                  setSize('large');
                }, 300);
              }}
            />
          </IonToolbar>
        </IonHeader>

        <IonList inset>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
              doloremque fuga beatae assumenda voluptates voluptatem adipisci
              error aliquid praesentium commodi?
            </IonLabel>
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
          <IonItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quaerat sed nam aut quasi! Aliquid, ducimus. Ut, labore dolorum
            doloremque fuga beatae assumenda voluptates voluptatem adipisci
            error aliquid praesentium commodi?
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
