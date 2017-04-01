import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';
import { ConnectionService } from '../providers/connection-service';
import { Lowercase } from '../pipes/lowercase';
import { AlertPage } from '../pages/alert/alert';
import {ButtonTestPage} from '../pages/button-test/button-test';
import {CardTestPage} from '../pages/card-test/card-test';
import {IconTestPage} from '../pages/icon-test/icon-test';
import {InputTestPage} from '../pages/input-test/input-test';
import {ListTestPage} from '../pages/list-test/list-test';
import {GridTestPage} from '../pages/grid-test/grid-test';
import {ModalTestPage} from "../pages/modal-test/modal-test";
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import {NavigationTestPage} from '../pages/navigation-test/navigation-test';
import {TabTestPage} from '../pages/tab-test/tab-test';
import {HomeTabPage} from '../pages/home-tab/home-tab';
import {ContatosTabPage} from '../pages/contatos-tab/contatos-tab';
import {ToastTestPage} from '../pages/toast-test/toast-test';
import {ToolbarTestPage} from '../pages/toolbar-test/toolbar-test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage,
    AlertPage,
    ButtonTestPage,
    CardTestPage,
    IconTestPage,
    InputTestPage,
    ListTestPage,
    GridTestPage,
    ModalTestPage,
    ModalLoginPage,
    NavigationTestPage,
    TabTestPage,
    HomeTabPage,
    ContatosTabPage,
    ToastTestPage,
    ToolbarTestPage,
    Lowercase
  ],
  imports: [
    IonicModule.forRoot(MyApp, [ConnectionService],{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage,
    AlertPage,
    CardTestPage,
    IconTestPage,
    InputTestPage,
    ButtonTestPage,
    ListTestPage,
    ModalTestPage,
    ModalLoginPage,
    NavigationTestPage,
    TabTestPage,
    HomeTabPage,
    ContatosTabPage,
    ToastTestPage,
    GridTestPage,
    ToolbarTestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectionService]
})
export class AppModule {}
