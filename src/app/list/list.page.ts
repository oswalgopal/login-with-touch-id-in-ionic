import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  Message: any;
  email: any = [];
  tempEmail: any;

  constructor(
    private socialShare: SocialSharing,
    private imagePicker: ImagePicker,
    private sms: SMS
    ) {

  }
  share() {
    this.socialShare.shareViaWhatsApp('Sharing via whatsapp', 'http://www.w3schools.com/cssref/img_tree.gif', 'oswalgopal.me').then(res => {
      console.log(res);
      window.alert(res);
    }).catch(err => {
      console.log(err);
    });
  }
  whatsapp() {
    this.socialShare.shareViaWhatsAppToReceiver('7697842208', 'Hi I am gopal sending via my ionic apk', 'http://www.w3schools.com/cssref/img_tree.gif', 'oswalgopal.me').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  shareviaMail() {
    this.email.push(this.tempEmail);
    this.socialShare.shareViaEmail(
      'this is sent via a gopal oswal ionic app',
      'Test mail',
      this.email
    )
      .then(res =>  {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  addnewEmail() {
    this.email.push(this.tempEmail);
    this.tempEmail = '';
  }
  ngOnInit() {
  }

  selectImage() {
    const options = {};
    this.imagePicker.getPictures(options).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  sendSMS() {
    this.sms.send(['7697842208', '6260401610'], 'this is send via my ionic app to multiple people').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}
