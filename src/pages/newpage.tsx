import React from 'react';
import { IonButton, IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../firebaseConfig';
import { toast } from '../toast';

const Newpage: React.FC = () => {
  const history = useHistory();

  async function handleLogout() {
    const res = await logoutUser();
    if (res) {
      toast('Logged out successfully');
      history.push('/');
    } else {
      toast('Error logging out. Please try again.');
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Hello</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Welcome to the Hello-Page!</h1>
        <p>If you want to Logout, just press the button below!</p>
        <IonButton onClick={handleLogout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Newpage
