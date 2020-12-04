import { AdministratorModule } from './administrator-controller/administrator.module';
import { HomeComponent } from './public-controller/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar-controller/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public-controller/publicController.module';
import { CustomerControllerModule } from './customer-controller/customer-controller.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    PublicModule,
    AdministratorModule,
    CustomerControllerModule,
    NgbModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
