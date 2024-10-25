import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React from 'react';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar color={'primary'}>
        <IonTitle>Hello App</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <p>Here you can Login or Register to the page</p>
      <IonButton routerLink="/login">Login</IonButton>
      <IonButton routerLink="/register" color="secondary">Register</IonButton>
    </IonContent>
  </IonPage>
);

export default Home;
