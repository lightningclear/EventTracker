import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CampingService } from './service/camping.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CampingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
