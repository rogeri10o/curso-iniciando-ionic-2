import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ConnectionService } from '../providers/connection-service';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test'
import { AlertPage } from '../pages/alert/alert';
import {ButtonTestPage} from '../pages/button-test/button-test';
import {CardTestPage} from '../pages/card-test/card-test';
import {IconTestPage} from '../pages/icon-test/icon-test';
import {InputTestPage} from '../pages/input-test/input-test';
import {ListTestPage} from '../pages/list-test/list-test';
import {GridTestPage} from '../pages/grid-test/grid-test';
import {ModalTestPage} from "../pages/modal-test/modal-test";
import {NavigationTestPage} from '../pages/navigation-test/navigation-test';
import {TabTestPage} from '../pages/tab-test/tab-test';
import {ToastTestPage} from '../pages/toast-test/toast-test';
import {ToolbarTestPage} from '../pages/toolbar-test/toolbar-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;

  rootPage = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Page', icon: 'home'},
      {component: AlertPage, title: 'Alert Page', icon: 'home'},
      {component: TabTestPage, title: 'Tab Test Page', icon: 'star'},
      {component: ToastTestPage, title: 'Toast Page', icon: 'home'},
      {component: ToolbarTestPage, title: 'ToolBar Page', icon: 'bus'},
      {component: NavigationTestPage, title: 'Navigation Page', icon: 'bus'},
      {component: ButtonTestPage, title: 'Button Page', icon: 'home'},
      {component: CardTestPage, title: 'Card Page', icon: 'home'},
      {component: IconTestPage, title: 'Card Page', icon: 'home'},
      {component: InputTestPage, title: 'Input Page', icon: 'star'},
      {component: ListTestPage, title: 'List Page', icon: 'bus'},
      {component: GridTestPage, title: 'Grid Page', icon: 'star'},
      {component: ModalTestPage, title: 'Modal Page', icon: 'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any, menuSide: string): void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }

  menuOpened(): void {
    console.log('Abriu');
  }

}
