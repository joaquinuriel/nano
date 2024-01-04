import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import { Buscar } from './pages/buscar';
import { Home } from './pages/home';
import { Tab3 } from './pages/tab3';

export function Tabs(): JSX.Element {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Home />
        </Route>
        <Route exact path="/tab2">
          <Buscar />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar
        className="absolute inset-0 top-auto"
        slot="bottom"
        translucent
      >
        <IonTabButton href="/tab1" tab="tab1">
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton href="/tab2" tab="tab2">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton href="/tab3" tab="tab3">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
