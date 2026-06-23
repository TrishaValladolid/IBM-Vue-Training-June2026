<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tasks</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tasks</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list inset>
        <ion-item v-for="task in tasks" :key="task.id">
          <ion-icon slot="start" :icon="ellipseOutline" color="medium" />
          <ion-label>
            <h2>{{ task.title }}</h2>
            <p>{{ task.due }}</p>
          </ion-label>
          <ion-button slot="end" fill="clear">Done</ion-button>
        </ion-item>
      </ion-list>

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button aria-label="Add new task">
          <ion-icon :icon="add" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { add, ellipseOutline } from 'ionicons/icons';

const tasks = [
  {
    id: 1,
    title: 'Review project brief',
    due: 'Today',
  },
  {
    id: 2,
    title: 'Prepare Vue components',
    due: 'Tomorrow',
  },
  {
    id: 3,
    title: 'Submit training activity',
    due: 'Friday',
  },
];
</script>
