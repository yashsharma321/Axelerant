import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  favoriteAuthor: any;
  isSuccessMessage: boolean = false;
  answers: any[] = [
                       {id: 1, value: 'Miguel de cervantes'}, 
                       {id: 2, value: 'Charies Dickens'}, 
                       {id: 3, value: 'J.R.R Tolklen'}, 
                       {id: 4, value:'Antoine de Saint-Exuper'}];
  selectedResult: any = [
    {id: 1, count: 0},
    {id: 2, count: 0},
    {id: 3, count: 0},
    {id: 4, count: 0},
  ]

  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem('data')) {
      localStorage.setItem("data",this.selectedResult)
    } else {
      this.selectedResult = JSON.parse(localStorage.getItem('data') || '{}');
    }
  }
  
  onSubmit(author: any) {
    this.selectedResult.forEach((elm: any) => {
      if(elm.id == author.id) {
        elm.count = elm.count+1;
        this.isSuccessMessage = true;
      }
    });
    console.log(this.selectedResult);
    localStorage.setItem('data', JSON.stringify(this.selectedResult))
    console.log("storage=>", (localStorage.getItem('data')));
  }

}
