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

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Please login</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>

          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input v-model="email" placeholder="email" type="text"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Password</ion-label>
            <ion-input v-model="password" placeholder="password" type="password"></ion-input>
          </ion-item>

          <ion-button @click="login">Login</ion-button>

        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent, IonCardSubtitle, IonLabel, IonInput, IonButton, IonItem
} from "@ionic/vue";
import axios from "axios";
import { Device } from '@capacitor/device';
import store from "../store";

export default {
  name: 'login',
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
    IonLabel,
    IonInput,
    IonButton,
    IonItem
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async login() {
      console.log('LOHIN');

      let token = null
      // TODO --> Llibreria casteaching_package
      // try {
      //   token = await casteaching.login(email,password,deviceName)
      // } catch (error){
      //   console.log(error);
      // }

      let apiClient = axios.create({
        baseURL: 'https://casteaching.alumnedam.me/api',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      const info = await Device.getInfo();
      console.log(info);
      const deviceName = 'TODO'

      const postData = {
        email: this.email,
        password: this.password,
        device_name: deviceName,
      }
      console.log(postData);
      const response = await apiClient.post('/sanctum/token',postData )
      console.log(response);
      token =response.data
      store.set('token', token)
      console.log(token);
      // TODO GET LOGGED USER
      // TODO --> Llibreria casteaching_package
      // try {
      //   token = await casteaching.user()
      // } catch (error){
      //   console.log(error);
      // }
      apiClient = axios.create({
        baseURL: 'https://casteaching.alumnedam.me/api',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
      const response2 = await apiClient.get('/user' )
      console.log(response2.data);
      // TODO SET USER
      store.set('user', response2.data)
      // {
      //   "id": 1,
      //     "name": "Sergi Tur Badenas",
      //     "email": "sergiturbadenas@gmail.com",
      //     "email_verified_at": null,
      //     "superadmin": 1,
      //     "current_team_id": 1,
      //     "profile_photo_path": "profile-photos/QEwxJU8PyhtBVLHpJYGM7sCjHVitWtow14KqF26G.png",
      //     "created_at": "2021-11-15T09:51:52.000000Z",
      //     "updated_at": "2021-11-15T10:09:54.000000Z",
      //     "profile_photo_url": "https://casteaching.alumnedam.me/storage/profile-photos/QEwxJU8PyhtBVLHpJYGM7sCjHVitWtow14KqF26G.png"
      // }
    }
  }
}
</script>

