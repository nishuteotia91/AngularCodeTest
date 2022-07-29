import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumServiceService } from './album-service.service';

import { AppComponent } from './app.component';
import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserServiceService,AlbumServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
