import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

/*
  Generated class for the ModalTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-test',
  templateUrl: 'modal-test.html'
})
export class ModalTestPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTestPage');
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalLoginPage, {
      action: {
        test: 'olá!',
        value: true
      }
    });

    modal.onDidDismiss((param) => {
      console.log('Dados Usuário', param);
    });

    modal.present();
  }
}
