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
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>GET TO KNOW US 🤓</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is Jarell's first activity on Ionic, Hybrid Programming.</p>
            <p>Click the button below to learn more about us!</p>
            <IonButton
            routerLink="/about"
            expand="block"
            color="secondary"
            className="about-button"
          >
            About us
          </IonButton>
          </IonCardContent>
          
        </IonCard>

        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>WANT TO CONNECT? ☎️</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>This is Jarell's first activity on Ionic, Hybrid Programming.</p>
            <p>Click the button below to contact us!</p>
            <IonButton
            routerLink="/contact"
            expand="block"
            color="secondary"
            className="about-button"
          >
            Contact Us
          </IonButton>
          </IonCardContent>
          
        </IonCard>

        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
