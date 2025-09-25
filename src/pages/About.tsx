import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/react';
import "./About.css"

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="page">
        {/* Card Section */}
        <IonCard className="aboutcard">
          <IonCardHeader>
            <IonCardTitle className="title">Welcome 🚀</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This is a demo Ionic React app. It shows how to create pages,
              navigate between them, and style using Ionic components.
            </p>

            {/* Button back to home */}
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

export default About;
