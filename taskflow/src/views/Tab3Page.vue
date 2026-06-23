<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list inset>
        <ion-item>
          <ion-icon slot="start" :icon="personCircleOutline" color="primary" />
          <ion-label>
            <h2>Trisha</h2>
            <p>TaskFlow user</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-list inset>
        <ion-item>
          <ion-icon slot="start" :icon="notificationsOutline" />
          <ion-label>Task reminders</ion-label>
          <ion-toggle slot="end" :checked="true" />
        </ion-item>

        <ion-item>
          <ion-icon slot="start" :icon="moonOutline" />
          <ion-label>Dark mode</ion-label>
          <ion-toggle slot="end" />
        </ion-item>

        <ion-item button>
          <ion-icon slot="start" :icon="informationCircleOutline" />
          <ion-label>About TaskFlow</ion-label>
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
  IonToggle,
  IonToolbar,
} from '@ionic/vue';
import {
  informationCircleOutline,
  moonOutline,
  notificationsOutline,
  personCircleOutline,
} from 'ionicons/icons';
</script>
