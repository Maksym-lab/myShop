import { NewsletterService } from './../../../../services/newsletter/newsletter.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Letter } from 'src/app/models/Letter/letter';
@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css']
})
export class NewslettersComponent implements OnInit {
  letter: Letter  = {    
    title: "",
    msg: ""
  }
  constructor(private newsService: NewsletterService) { }
  ngOnInit() {
  }
  onSubmit(){
    if(this.notEmpty()){
      this.newsService.addLetter(this.letter);
      this.clearLetter();
    }
  }
  notEmpty() : boolean{
    return this.letter.title != "" && this.letter.msg != "" ;
  }
  clearLetter(){
    this.letter.title="";
    this.letter.msg="";
  }
}
