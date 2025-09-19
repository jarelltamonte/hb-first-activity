import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Contact Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>GET IN TOUCH 📞</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is just an example for the contact page!</p>
            <p>
              You can customize this page to include a contact form, email
              details, or even social media links.
            </p>
            <IonButton routerLink="/home" expand="block" color="secondary">
              Go Back Home
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Contact;
