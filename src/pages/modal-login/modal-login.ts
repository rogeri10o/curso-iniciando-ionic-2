import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLoginPage {
  user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    console.log('Dados Recebidos', navParams.get('action'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLoginPage');
  }

  logar() {
    this.view.dismiss(this.user);
  }

  close() {
    this.view.dismiss();
  }

}
