import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomeTabPage} from '../home-tab/home-tab';
import {ContatosTabPage} from '../contatos-tab/contatos-tab';

/*
  Generated class for the TabTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tab-test',
  templateUrl: 'tab-test.html'
})
export class TabTestPage {

  homePage: any = HomeTabPage;
  contatosPage: any = ContatosTabPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabTestPage');
  }

}
