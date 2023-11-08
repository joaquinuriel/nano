import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonProgressBar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useStore } from '@nanostores/react';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { atom } from 'nanostores';
import { useEffect, useRef, useState } from 'react';
import { useStorage } from 'reactfire';

const $photos = atom([] as File[]);

export function Tab3(): JSX.Element {
  const page = useRef();
  const input = useRef<HTMLInputElement>(null);

  const storage = useStorage();
  const photos = useStore($photos);

  const [value, setValue] = useState(0);

  useEffect(() => {
    photos.forEach((photo) => {
      const dir = ref(storage, `images/${photo.name}`);
      uploadBytesResumable(dir, photo).on('state_changed', (snap) => {
        setValue(snap.bytesTransferred / snap.totalBytes / photos.length);
      });
    });
  }, [storage, photos]);

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
        {value > 0 && value < 1 && <IonProgressBar value={value} />}
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset>
          <IonItem>
            <input
              accept="image/*"
              hidden
              id="input"
              multiple
              onChange={(e) => {
                const array = Array.from(e.target.files || []);
                $photos.set(array);
                // files.current = Array.from(e.target.files || []);
              }}
              ref={input}
              type="file"
            />
            <label className="mx-auto" htmlFor="input">
              <IonThumbnail className="[--size:80px] [--border-radius:50%]">
                <img alt="" src="https://www.gravatar.com/avatar" />
              </IonThumbnail>
            </label>
          </IonItem>
        </IonList>
        <IonList inset>
          {photos.map((photo) => (
            <IonItem button key={photo.name}>
              <IonThumbnail>
                <img alt="" src={URL.createObjectURL(photo)} />
              </IonThumbnail>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
