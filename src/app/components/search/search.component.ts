import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  keywordsForm = new FormGroup({
    keywords: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.search.emit(this.keywordsForm.get("keywords")?.value);
  }

}
