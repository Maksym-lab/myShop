import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';
import { AdministratorModule } from './controllers/administrator-controller/administrator.module';
import { HomeComponent } from './controllers/public-controller/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './controllers/navbar-controller/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PublicModule } from './controllers/public-controller/publicController.module';
import { CustomerControllerModule } from './controllers/customer-controller/customer-controller.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    PublicModule,
    AdministratorModule,
    CustomerControllerModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent
      },
      {
        path:'**',
        redirectTo: ''
      }
    ])
  ],
  exports:[FormsModule],
  providers: [
    AuthService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
