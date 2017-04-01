import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ToolbarTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toolbar-test',
  templateUrl: 'toolbar-test.html'
})
export class ToolbarTestPage {
  public segment: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.segment = "noticias";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarTestPage');
  }

}
