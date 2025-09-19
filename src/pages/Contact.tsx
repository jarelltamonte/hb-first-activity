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
  IonInput, 
  IonItem, 
  IonList
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
            <IonList>
                <IonItem>
                    <IonInput placeholder="Your Name" />
                </IonItem>
                <IonItem>
                    <IonInput placeholder="Your Email" type="email" />
                </IonItem>
                <IonItem>
                    <IonInput placeholder="Your Message" />
                </IonItem>
            </IonList>
            <IonButton expand="block" color="secondary">
              Submit
            </IonButton>
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
