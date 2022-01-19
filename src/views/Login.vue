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
  IonButton,
  IonButtons,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonContent,
  IonHeader, IonInput, IonItem, IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";

import { Device } from '@capacitor/device';
import axios from 'axios'
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
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // OBTENIR EL DEVICE_NAME:
      const info = await Device.getInfo();

      // CAPACITOR // CORDOVA
      // 'email' => 'required',
      // 'password' => 'required',
      // 'device_name' => 'required',
      // POST -> URL https://casteaching.alumnedam.me/api/sanctum/token

      //TODO
      let token = null
      const device_name = (info && info.name) || 'TokenCasteachingIonic'
      // try {
      //   token = casteaching.login(this.email,this.password,device_name)
      // } catch (error) {
      //   console.log(error);
      // }


      const apiClient = axios.create({
        baseURL: 'https://casteaching.alumnedam.me/api',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Authorization: 'Bearer YSqXe8KJiHfx3Z9MGaoic0heLIZ0ifv9ZODV30r0'
        }
      })
      const postData = {
        email: this.email,
        password: this.password,
        device_name: device_name
      }
      let response = null
      let response2 = null
      try {
        response = await apiClient.post('/sanctum/token', postData)
      } catch (error) {
        console.log(error);
      }

      token = response.data

      const axiosClient = axios.create({
        baseURL: 'https://casteaching.alumnedam.me/api',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })

      try {
        response2 = await axiosClient.get('/user')
      } catch (error) {
        console.log(error);
      }
      const user = response2.data

      // GUARDAR A L'STORE TANT EL User com el token
      await store.set('token', token)
      await store.set('user', user)

      this.emitter.emit('login',user)

      // REDIRECT AMB SPA router.push cap a quina URL o ruta
      let path = '/user'
      // route parameters wantedRoute
      if(this.$route.params && this.$route.params.wantedRoute) path = this.$route.params.wantedRoute
      this.$router.push({ path })

    }
  }
}
</script>

