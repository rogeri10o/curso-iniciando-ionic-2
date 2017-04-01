import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CardTestPage} from '../card-test/card-test';

/*
  Generated class for the NavigationTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-navigation-test',
  templateUrl: 'navigation-test.html'
})
export class NavigationTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPage() {
    this.navCtrl.push(CardTestPage, {
      mensagem: "Mensagem vinda de Navigation Test"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationTestPage');
  }

}
