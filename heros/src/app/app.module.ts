

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MessagesComponent } from './messages/messages.component';
// module
// ngModel 디렉티브 사용하기 위해서 FormsModule 모듈 등록
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './module/app-routing.module';
// service
import { HeroService } from './service/hero.service';
import { MessageService } from './service/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MessagesComponent,
    HeroListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
 ],
  providers: [
    HeroService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
