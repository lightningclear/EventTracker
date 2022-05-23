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
import { CreateCampComponent } from './component/create-camp/create-camp.component';
import { IncompletePipe } from './pipes/incomplete.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CreateCampComponent,
    IncompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CampingService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
