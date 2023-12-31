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
import { atom } from 'nanostores';

import './Tab2.css';

const $focus = atom(false);
const $input = atom('');

export function Buscar(): JSX.Element {
  const focus = useStore($focus);
  const _input = useStore($input);

  // const _slides = useMemo(() => {
  //   return Array.from({ length: 5000 }).map(
  //     (el, index) => `Slide ${index + 1}`,
  //   );
  // }, []);

  return (
    <IonPage>
      <IonHeader collapse="fade" className="ion-no-border">
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar className="!z-0">
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonHeader collapse='fade' className="sticky top-0">
          <IonToolbar>
            <IonSearchbar
              // animated
              onBlur={() => {
                $focus.set(false);
              }}
              onFocus={() => {
                $focus.set(true);
              }}
            />
          </IonToolbar>
        </IonHeader>

        <IonList inset>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vitae
              incidunt quo veritatis esse beatae. A corrupti veniam voluptatum.
              Aspernatur eveniet eius eaque mollitia sed id veniam temporibus
              sapiente nostrum!
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
