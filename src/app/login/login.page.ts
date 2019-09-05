import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private faio: FingerprintAIO, private router: Router) {
    this.faio.isAvailable().then(res => {
      window.alert(res);
      this.faio.show({
        clientId: 'Fingerprint-Demo',
        clientSecret: 'password',
        disableBackup: true,
        localizedFallbackTitle: 'Use Pin',
        localizedReason: 'Please authenticate'
      })
        .then((result: any) => {
          console.log(result);
          window.alert('logged in');
        })
        .catch((error: any) => {
          console.log(error);
          window.alert(error);
        });
    }).catch(err => {
      window.alert(err);
    });
  }

  ngOnInit() {
  }

}
