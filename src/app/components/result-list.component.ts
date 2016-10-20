import {Component, OnInit, Input} from '@angular/core';
import {Result} from "../shared/result.class";

@Component({
  selector: 'crawl-result-list',
  templateUrl: './result-list.component.html',
  styles: []
})
export class ResultListComponent implements OnInit {
  selectedResult: Result;
  @Input() results: Result[];

  constructor() { }

  ngOnInit() {
  }

}
