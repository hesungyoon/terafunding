import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
@Injectable()
export class MessageService {
  messages: string[] = [];
  listHeroes: Hero[] = [];
  add(message: string) {
    this.messages.push(message);
  }
  addHero(list: Hero): void {
    this.listHeroes.push(list);
  }
  clear() {
    this.messages = [];
  }
  constructor() { }

}
