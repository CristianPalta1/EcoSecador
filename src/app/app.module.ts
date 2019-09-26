import { CotizacionServices } from './services/cotizacion.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
// import { Hashlocationstrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';


import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { PersonalServices } from './services/personal.service';
import { RegistroServices } from './services/registro.service';
import { TemperaturaServices } from './services/temperatura.service';



// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

library.add(faCoffee);

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        LayoutModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        PersonalServices,
        RegistroServices,
        TemperaturaServices,
        CotizacionServices,
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}
