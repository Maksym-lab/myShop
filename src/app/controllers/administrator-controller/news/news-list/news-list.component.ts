import { Component, OnInit } from '@angular/core';
import { NewsletterService } from 'src/app/services/newsletter/newsletter.service';
import { Observable } from 'rxjs';
import { Letter } from 'src/app/models/Letter/letter';
@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsletters: Letter[];
  constructor(private newsService: NewsletterService) { 
  }
  ngOnInit() {
    this.newsService.getLetters().subscribe(letters => {
      this.newsletters = letters;
    });    
  }
}
