<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ video.title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <iframe id="video" :src="video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ video.title }}</ion-card-title>
            <ion-card-subtitle>{{ video.published_at }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            {{ video.description }}
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';


export default {
  name: 'Video',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  },
  data() {
    return {
      video: {}
    }
  },
  async created() {
    try {
      this.video = await this.casteaching.video.show(this.$route.params.id)
    } catch (error) {
      console.log(error);
      // TODO es fer un toast de Ionic per mostrar un error
      // https://ionicframework.com/docs/api/toast
    }


    // this.video = {
    //   id: 1,
    //   title: "Ubuntu 101",
    //   description: "# Here description",
    //   url: "https://www.youtube.com/embed/w8j07_DBl_I",
    //   published_at: "2020-12-13T20:00:00.000000Z",
    // }
  }
}
</script>

<style scoped>

#video {
  width:100%;
  height:70vh;
}

</style>