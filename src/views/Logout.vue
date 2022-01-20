<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Logout</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Logout here!</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>

          <ion-button @click="logout">Logout</ion-button>

        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>

</template>

<script>
import store from "../store";
import {
  IonButton,
  IonButtons,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

export default {
  name: 'Logout',
  components: {
    IonMenuButton,
    IonContent,
    IonPage,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonButton
  },
  methods: {
    async logout() {
      await store.set('token', null)
      const oldUser = await store.get('user')
      await store.set('user', null)

      this.emitter.emit('logout',oldUser)

      // Recomanacions de seguretat -> Esborrar el token -> API backend esborrar tokens -> TODO
      this.$router.push('/login')    }
  }
}
</script>