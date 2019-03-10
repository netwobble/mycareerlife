import { Component, OnInit } from '@angular/core';

const firebase = require('nativescript-plugin-firebase');

@Component({
  selector: 'mcl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.

      onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
        console.log(data.loggedIn ? '$$$$$$ Logged in to firebase' : '$$$$$$ Logged out from firebase');
        if (data.loggedIn) {
          console.log('users email address: ' + (data.user.email ? data.user.email : 'N/A'));
        }
      }
    }).then(
      () => {
        console.log('$$$$$$ firebase.init done');
      },
      error => {
        console.log(`$$$$$ firebase.init error: ${error}`);
      }
    );
  }
}
