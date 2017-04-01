import { Component } from '@angular/core';
import { NavController, NavParams, Alert, AlertController } from 'ionic-angular';

/*
  Generated class for the Alert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  user: string = 'none';
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nome',
      message: 'Digite seu nome',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Seu nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.user = data.nome;
          }
        }
      ]
    });

    alert.present();
  }

}
