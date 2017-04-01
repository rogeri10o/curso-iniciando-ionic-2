import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ListTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-test',
  templateUrl: 'list-test.html'
})
export class ListTestPage {
  personagens: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personagens = [
      'Rogerio Reis',
      'Rildo Reis',
      'Antônio Luis'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTestPage');
  }

}
