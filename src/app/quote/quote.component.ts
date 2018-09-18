import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'If you try, you risk failure. If you don’t, you ensure it.','James','Anonymous',0,0,new Date()),
    new Quote(2, 'If you do what you need, you’re surviving. If you do what you want, you’re living.','Wesley','Unknown',0,0,new Date(2018,6,9)),
    new Quote(3, 'Go confidently in the direction of your dreams. Live the life you have imagined.','Hannah','Henry David Thoreau',0,0,new Date(2018,5,7)),
    new Quote(4, 'I would rather die a meaningful death than to live a meaningless life.','Mwangi','Corazon Aquino',0,0,new Date(2018,3,2)),
    new Quote(5, 'Without food,man can live at most but a few weeks;components of social justice are meaningless.','Tony','Harry Dean',0,0, new Date(2018,3,4)),
  ]

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Do you want to delete ${this.quotes[index].name}`)
      
      if(toDelete){
        this.quotes.splice(index,1);
      }
     
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  constructor() { }

  ngOnInit() {
  }

}
