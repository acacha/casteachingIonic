<template>
  <ion-content>
    <ion-refresher slot="fixed" @ion-refresh="refresh" id="refresher">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
    <ion-list id="skeleton" v-if="loading">
      <ion-list-header>
        <ion-skeleton-text animated style="width: 80px"></ion-skeleton-text>
      </ion-list-header>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
    </ion-list>
    <ion-list v-else>
      <ion-list-header>
        Videos
      </ion-list-header>

      <ion-item v-for="video in videos" :key="video.id">
        <ion-avatar slot="start">
          <img src="https://via.placeholder.com/80">
        </ion-avatar>
        <ion-label>
          <h2>{{ video.title }}</h2>
          <p>{{ video.description }}</p>
        </ion-label>
      </ion-item>

    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRefresher,
  IonRefresherContent,
  IonContent,
  IonSkeletonText
} from "@ionic/vue";
import casteaching from '@acacha/casteaching'

export default {
  name: "Videos",
  components: {
    IonList,
    IonItem,
    IonListHeader,
    IonAvatar,
    IonLabel,
    IonRefresher,
    IonRefresherContent,
    IonContent,
    IonSkeletonText,
  },
  data() {
    return {
      videos: [],
      loading: true
    }
  },
  async created() {
    await this.fetchVideos()
    this.loading = false
  },
  mounted() {
    this.refresher = document.getElementById('refresher');
  },
  methods: {
    async refresh() {
      await this.fetchVideos()
      this.refresher.complete();
    },
    async fetchVideos() {
      this.videos = await casteaching.videos()
    }
  }
}
</script>

<style scoped>

</style>