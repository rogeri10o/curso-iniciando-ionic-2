import { Component } from '@angular/core';
import { NavController, NavParams, Alert, AlertController  } from 'ionic-angular';

/*
  Generated class for the InputTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input-test',
  templateUrl: 'input-test.html'
})
export class InputTestPage {
  login: string;
  senha: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputTestPage');
  }

  entrar() {
    let alert = this.alertCtrl.create({
      title: 'Entrando...',
      message: 'Login: ' + this.login + ', Senha: ' + this.senha
    });

    alert.present();
  }
}
