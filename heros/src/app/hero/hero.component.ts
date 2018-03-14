import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
// delete HEROES into mock-hero
import { HEROES } from '../dummyData/mock-hero';
// service
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // hero property
  // change the hero from a string to an object
  // hero = 'windstorm';
  heroTest: Hero = {
    id: 1,
    name: 'windstorm'
  };

  // display heros
  // add a heroes property to the class (heroes for binding)
  // mock data
  heroes = HEROES;
  heroDatas: Hero[];
  heroDatasRxJs: Hero[];
  // style the heroes
  selectedHero: Hero;
  // function
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // injected dependancy
    this.messageService.addHero(this.selectedHero);
  }
  // providers 프로퍼티의 설정 정보대로 동작하여
  // 의존 관계 객체의 인스턴스를 생성하고 주입한다.
  // 의존성 주입
  // 인스턴스 사용
  constructor(private heroService: HeroService,
              private messageService: MessageService
            ) { }

  GetHeroData(): void {
    this.heroDatas = this.heroService.getHeroes();
  }
  GetHeroDataRxJs() {
    this.heroService.getHeroesRxJs().subscribe(hero => this.heroDatasRxJs = hero);
  }

  ngOnInit() {
   // this.selectedHero = {id: null, name: null};
   // but the HeroService.getHeroes() has a synchronous signature
   // this will not work in a real app
   // when the app will fetch heroes from a remote server,
   // which is an asynchrous operation
   this.GetHeroData();
   this.GetHeroDataRxJs();
  }

}
