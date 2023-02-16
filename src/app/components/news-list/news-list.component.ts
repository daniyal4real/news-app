import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NewsService} from "../../services/newsService";
import {News, PageInfo} from "../../models/model";
import {Router} from '@angular/router';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnChanges {
  @Input() news!: News[]
  @Input() page_info!: PageInfo
  totalItems!: number;


  constructor(
    private newsService: NewsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.page_info) {
      this.totalItems = this.page_info.total_pages * 15;
    } else {
      this.totalItems = 0;
    }
    }
}
