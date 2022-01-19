<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <h1>User</h1>
        name: {{ this.user.name}}
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonContent, IonHeader,
  IonMenuButton,
  IonPage, IonTitle, IonToolbar,
} from "@ionic/vue";

import store from "../store";


export default {
  name: 'Login',
  components: {
    IonMenuButton,
    IonContent,
    IonPage,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader
  },
  data () {
    return {
      user: store.user
    }
  }
}
</script>