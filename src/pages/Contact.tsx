import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput, 
  IonItem, 
  IonList,
  IonTextarea
} from "@ionic/react";
import "./Contact.css"

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="page">
        <IonCard className="contactcard">
          <IonCardHeader>
            <IonCardTitle className="title">GET IN TOUCH 📞</IonCardTitle>
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
                    <IonTextarea placeholder="Your Message" className="contactmessage"/>
                </IonItem>
            </IonList>
            <IonButton className="submitbutton" color="none">
              Submit
            </IonButton>
            <IonButton routerLink="/home" className="button" color="none">
              Go Back Home
            </IonButton>
          </IonCardContent>
        </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Contact;
