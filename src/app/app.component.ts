import { Component, OnInit } from '@angular/core';
import {NewsService} from "./services/newsService";
import {News, PageInfo, Res} from "./models/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-frontend';
  news!: News[];
  res!: Res
  page_info!: PageInfo
  id!: number
  eventID!: number
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getAll().subscribe((data: Res) => {
      this.news = data.news;
      this.page_info = data.page_info;
    })

    
  }

  search(event: string): void {
    this.newsService.getByKeywords(event).subscribe((data: News[]) => {
      this.news = data;
    })
  }



  onDataChange(event: any): void{
    console.log(event)
    this.eventID = event
    this.newsService.getById(this.eventID).subscribe((data: Res) => {
      this.news = data.news;
      this.page_info = data.page_info;
      
    })
  }
}
