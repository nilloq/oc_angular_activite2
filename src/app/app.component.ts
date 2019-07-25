import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My Litte Blog';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCqkzky6b6m4ke2wLj5AODlJc_G41EEq0U",
      authDomain: "posts-117b4.firebaseapp.com",
      databaseURL: "https://posts-117b4.firebaseio.com",
      projectId: "posts-117b4",
      storageBucket: "posts-117b4.appspot.com",
      messagingSenderId: "124728428546",
      appId: "1:124728428546:web:d643adedc41aa26b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}



