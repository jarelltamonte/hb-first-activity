import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
// import ExploreContainer from '../components/ExploreContainer';
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="page">
        <IonCard className="homecard">
          <IonCardHeader>
            <IonCardTitle className="title">GET TO KNOW US 🤓</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is Jarell's first activity on Ionic, Hybrid Programming.</p>
            <p>Click the button below to learn more about us!</p>
            <IonButton
              routerLink="/about"
              className="button"
              color="none"
            >
              About us
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard className="homecard">
          <IonCardHeader>
            <IonCardTitle className="title">WANT TO CONNECT? ☎️</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is Jarell's first activity on Ionic, Hybrid Programming.</p>
            <p>Click the button below to contact us!</p>
            <IonButton
              routerLink="/contact"
              className="button"
              color="none"
            >
              Contact Us
            </IonButton>
          </IonCardContent>
        </IonCard>
        </div>

        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
