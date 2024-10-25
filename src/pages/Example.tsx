import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Example: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example Page!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonContent className="ion-padding">Hello from Example Page! </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Example;
