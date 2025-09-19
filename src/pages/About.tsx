import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      {/* Page Header */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Page Content */}
      <IonContent className="ion-padding">

        {/* Card Section */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome 🚀</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This is a demo Ionic React app. It shows how to create pages,
              navigate between them, and style using Ionic components.
            </p>
            <p>
              You can fully customize this page to include your team info,
              app purpose, or even links to external resources.
            </p>

            {/* Button back to home */}
            <IonButton routerLink="/home" expand="block" color="secondary">
              Go Back Home
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default About;
