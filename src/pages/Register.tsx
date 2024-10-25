import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebaseConfig';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  async function handleRegisterUser() {
    if (password !== cpassword) {
      setToastMessage("Passwords don't match");
      setShowToast(true);
      return;
    }
    if (username.trim() === '' || password.trim() === '') {
      setToastMessage("Username and password are required");
      setShowToast(true);
      return;
    }

    const res = await registerUser(username, password);
    if (res) {
      setToastMessage("Registration successful!");
    } else {
      setToastMessage("Registration failed. Please try again.");
    }
    setShowToast(true);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Username:" onIonChange={(e) => setUsername(e.detail.value!)} />
        <IonInput type="password" placeholder="Password:" onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonInput type="password" placeholder="Confirm Password:" onIonChange={(e) => setCPassword(e.detail.value!)} />
        <IonButton onClick={handleRegisterUser}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
