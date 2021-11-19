<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Video {{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <iframe id="video" src="https://www.youtube.com/embed/jKMTRtkXAF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Video Title</ion-card-title>
            <ion-card-subtitle>Published date</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            TODO DESCRIPTION HERE
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
  }
}
</script>

<style scoped>

#video {
  width:100%;
  height:70vh;
}

/*#container {*/
/*  text-align: center;*/
/*  position: absolute;*/
/*  left: 0;*/
/*  right: 0;*/
/*  top: 50%;*/
/*  transform: translateY(-50%);*/
/*}*/

/*#container strong {*/
/*  font-size: 20px;*/
/*  line-height: 26px;*/
/*}*/

/*#container p {*/
/*  font-size: 16px;*/
/*  line-height: 22px;*/
/*  color: #8c8c8c;*/
/*  margin: 0;*/
/*}*/

/*#container a {*/
/*  text-decoration: none;*/
/*}*/
</style>