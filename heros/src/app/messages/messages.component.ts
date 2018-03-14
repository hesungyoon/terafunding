import { Component, OnInit, Input} from '@angular/core';
import { MessageService } from '../service/message.service';
import { Hero } from '../interfaces/hero.interface';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // @Input() hero: Hero;
  @Input() addHero: Hero;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
