import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function login() {
    const res = await loginUser(username, password);
    if (!res) {
      toast('Error logging in with your credentials. Please try again.');
    } else {
      toast('Login successful!');
      history.push('/newpage');
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username:" onIonChange={(e) => setUsername(e.detail.value!)} />
        <IonInput type="password" placeholder="Password:" onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton onClick={login}>Login</IonButton>
        <p>
          Don't have an account yet? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
