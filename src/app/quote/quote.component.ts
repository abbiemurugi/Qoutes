import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  Quotes = [
    new Quote(1, 'If you try, you risk failure. If you don’t, you ensure it.','James','Anonymous',new Date()),
    new Quote(2, 'If you do what you need, you’re surviving. If you do what you want, you’re living.','Wesley','Unknown',new Date()),
    new Quote(3, 'Go confidently in the direction of your dreams. Live the life you have imagined.','Hannah','Henry David Thoreau',new Date()),
    new Quote(4, 'I would rather die a meaningful death than to live a meaningless life.','Mwangi','Corazon Aquino',new Date()),
    new Quote(5, 'Without food,man can live at most but a few weeks;components of social justice are meaningless.','Tony','Harry Dean',new Date()),
  ]

  constructor() { }

  ngOnInit() {
  }

}
