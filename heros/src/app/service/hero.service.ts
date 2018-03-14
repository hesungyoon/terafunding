import { Injectable } from '@angular/core';

import { Hero } from '../interfaces/hero.interface';
import { HEROES } from '../dummyData/mock-hero';
// rxJs
// 비동기 데이터 처리를 위해 이벤트 스트림을 구독하고
// 이 스트림에 반응하는 방식
// observable operators
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
// service
import { MessageService } from './message.service';
// @injectable decorator is injected dependecies
// get data from anywhere--a local storage, a mock data source, a webservice
@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  // observable
  getHeroesRxJs(): Observable<Hero[]> {
    this.messageService.add('HeroService: fatched heroes');
    console.log(this.messageService.messages);
    return of(HEROES);
    // of(HEROES) returns an Obs<Hero[]> that emits a single value,
    // the array of mock heroes.
  }
  // test(): void {
  //  const test = Observable.from(HEROES);
  // }
  // inject the singleton MessageService
  constructor(private messageService: MessageService) { }
}
