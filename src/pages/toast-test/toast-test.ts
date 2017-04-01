import { Component } from '@angular/core';
import { NavController, NavParams, Toast, ToastController } from 'ionic-angular';

/*
  Generated class for the ToastTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-toast-test',
  templateUrl: 'toast-test.html'
})
export class ToastTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastTestPage');
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Olá Mundo!',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'OK',
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Toast Finalizado!');
    });

    toast.present();
  }

}
