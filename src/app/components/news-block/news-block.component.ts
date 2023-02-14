import {Component, Input, OnInit} from '@angular/core';
import { News } from '../../models/model';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.css']
})
export class NewsBlockComponent implements OnInit {
  @Input() news!: News

  constructor() { }

  ngOnInit(): void {
  }

}
