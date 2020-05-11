import firebase from 'firebase/app';

var config = {
  apiKey: 'AIzaSyDYve_5tC3bbvrc_pu0pH8NOsCaQZfibis',
  authDomain: 'fortnite-timeline.firebaseapp.com',
  databaseURL: 'https://fortnite-timeline.firebaseio.com',
  projectId: 'fortnite-timeline',
  storageBucket: 'fortnite-timeline.appspot.com',
  messagingSenderId: '774093699381',
  appId: '1:774093699381:web:8b5f0a552d0af82fe9b47c',
};

firebase.initializeApp(config);

export default firebase;
