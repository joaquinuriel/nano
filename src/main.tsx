import React from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import { App } from './app';
import { firebaseConfig } from './config/firebase';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
);
