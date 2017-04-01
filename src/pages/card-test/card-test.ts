import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CardTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-card-test',
  templateUrl: 'card-test.html'
})
export class CardTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('mensagem'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardTestPage');
  }

  voltar() {
    this.navCtrl.pop();
  }
}
