<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Completed</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Completed</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list inset>
        <ion-item v-for="task in completedTasks" :key="task.id">
          <ion-icon slot="start" :icon="checkmarkCircle" color="success" />
          <ion-label>
            <h2>{{ task.title }}</h2>
            <p>{{ task.completedAt }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { checkmarkCircle } from 'ionicons/icons';

const completedTasks = [
  {
    id: 1,
    title: 'Set up Ionic project',
    completedAt: 'Completed today',
  },
  {
    id: 2,
    title: 'Create tab navigation',
    completedAt: 'Completed yesterday',
  },
];
</script>
