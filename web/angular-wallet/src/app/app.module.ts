import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { AppComponent } from 'app/app.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { SetupModule } from './setup/setup.module';
import { LoginGuard } from './login/login-guard.service';
import { StoreService } from './store/store.service';
import { StoreConfig, appConfigFactory } from './store/store.config';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: MainComponent,
    canActivate: [LoginGuard]
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }),

    TranslateModule.forRoot(),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,
    // App modules
    LoginModule,
    MainModule,
    SetupModule
  ],
  providers: [
    StoreService,
    { provide: StoreConfig, useFactory: appConfigFactory }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
