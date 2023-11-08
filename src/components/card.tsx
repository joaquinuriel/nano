import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

export function Card(): JSX.Element {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Hello world</IonCardTitle>
        <IonCardSubtitle>Lorem ipsum</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla
        molestias ipsa, dolorem ipsam possimus iusto nihil quibusdam maxime
        repudiandae, distinctio id deleniti itaque corrupti provident
        doloremque. Ea, similique dolor.
      </IonCardContent>
    </IonCard>
  );
}
