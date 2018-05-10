<template>
  <aside class="menu">
    <p class="menu-label">
      NB-IoT
    </p>
    <ul class="menu-list">
      <li>
        <a class="is-active">Devices</a>
        <ul>
          <li v-for="device in devices">
            <a href="#">
              {{ device.name}}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import * as firebase from 'firebase'

  let devices = []

  let app = firebase.initializeApp({
    apiKey: 'AIzaSyDjKtk-mfuS_g3ZnWI4NX2x5ynUQU1Y3og',
    authDomain: 'performance-182414.firebaseapp.com',
    databaseURL: 'https://performance-182414.firebaseio.com',
    projectId: 'performance-182414',
    storageBucket: 'performance-182414.appspot.com',
    messagingSenderId: '779931616641'
  })

  app.database().ref('/').once('value', (snapshot) => {
    snapshot.forEach(child => {
      devices.push(child.val())
      console.log(devices)
    })
  })

  export default {
    name: 'LeftPanel',
    data () {
      return {
        devices: devices
      }
    }
  }
</script>
