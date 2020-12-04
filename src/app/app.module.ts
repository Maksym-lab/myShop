import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { NavbarComponent } from './controllers/navbar-controller/navbar/navbar.component';
import { HomeComponent } from './controllers/public-controller/home/home.component';
import { PublicModule } from './controllers/public-controller/publicController.module';
import { CustomerControllerModule } from './controllers/customer-controller/customer-controller.module';
import { AdministratorModule } from './controllers/administrator-controller/administrator.module';
import { UserService } from './services/user/user.service';
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
    AngularFirestore,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
