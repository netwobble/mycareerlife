import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user/user.model';


import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const firebase = require('nativescript-plugin-firebase');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
      private router: Router
  ) {
    console.log('$$$$$$ In Auth Service TNS ');


    firebase.getCurrentUser()
    .then(user => console.log('User uid: ' + user.uid))
    .catch(error => console.log('Trouble in paradise: ' + error));

          // Get the auth state, then fetch the Firestore user document or return null
/*           this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                // Logged in
              if (user) {
                return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
              } else {
                // Logged out
                return of(null);
              }
            })
          ); */
  }
// Add the services

async googleSignin() {
/*   const provider = new auth.GoogleAuthProvider();
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user); */
}

private updateUserData(user) {
  // Sets user data to firestore on login
/*   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  const data = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
  };

  return userRef.set(data, { merge: true }); */

}

async signOut() {
/*   await this.afAuth.auth.signOut();
  this.router.navigate(['/']); */
}



}
