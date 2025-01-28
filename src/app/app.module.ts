import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {AlertService} from "./services/alert.service";
import {ToastService} from "./services/toast.service";
import {NgxsModule} from "@ngxs/store";
import {AuthState} from "./state/auth/auth.state";
import {getAuth, provideAuth} from "@angular/fire/auth";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", '.json')
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxsModule.forRoot([
      AuthState
    ])

  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AlertService,
    ToastService
    // provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
