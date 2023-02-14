import {Component, Input, OnInit} from '@angular/core';
import { NewsService } from "../../services/newsService";
import {News, PageInfo, Res} from "../../models/model";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() news!: News[]
  @Input() page_info!: PageInfo


  constructor(
    private newsService: NewsService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }


}
