import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MenuController} from '@ionic/angular';
@Component({
  selector: 'app-githubdetail',
  templateUrl: './githubdetail.page.html',
  styleUrls: ['./githubdetail.page.scss'],
})
export class GithubdetailPage implements OnInit {
  username: any;
  userDetial: any;
  constructor(private http: HttpClient,
              private menu: MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menu.enable(false);
  }
  GetUserDetail() {
    return  new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/users/' + this.username).subscribe(res => {
        resolve(res);
        this.userDetial = res;
      }, error => {
        console.log(error);
      } );
    });
  }

}
