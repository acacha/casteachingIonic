<template>

  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <h1>Login</h1>
        TODO LOGIN
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/vue";

export default {
  name: 'login',
  components: {
    IonMenuButton,
    IonContent,
    IonPage,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader
  },
}
</script>

