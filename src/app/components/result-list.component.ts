import {Component, OnInit, Input} from '@angular/core';
import {Result} from "../shared/result.class";
import {MenuItem} from "primeng/components/common/api";

interface MyWindow extends Window {
  myFunction(): void;
}

declare var window: MyWindow;

@Component({
  selector: 'crawl-result-list',
  templateUrl: './result-list.component.html',
  styles: []
})
export class ResultListComponent implements OnInit {
  @Input() results: Result[];
  menu_items: MenuItem[];
  selectedResult: Result;

  constructor() { }

  ngOnInit() {
    this.menu_items = [
      // {label: 'Thumbnail', icon: 'fa-picture-o', command: (event) => this.thumbnail(this.selectedResult)},
      {label: 'Preview', icon: 'fa-search', command: (event) => this.preview(this.selectedResult)},
      {label: 'Object', icon: 'fa-barcode', command: (event) => this.viewTeneo(this.selectedResult)},
      {label: 'Alma', icon: 'fa-book', command: (event) => this.viewAlma(this.selectedResult)}
    ];

  }

  thumbnail(result: Result) {
    if (result.pid) {
      window.open('http://resolver.libis.be/' + result.pid + '/thumbnail', '_blank');
    } else {
      alert('No PID !!!');
    }
  }

  preview(result: Result) {
    if (result.pid) {
      window.open('http://resolver.libis.be/' + result.pid + '/stream','_blank');
    } else {
      alert('No PID !!!');
    }
  }

  viewTeneo(result: Result) {
    if (result.pid) {
      window.open('http://resolver.libis.be/' + result.pid + '/representation','_blank');
    } else {
      alert('No PID !!!');
    }
  }

  viewAlma(result: Result) {
    if (result.alma_id) {
      alert('Comming soon ...');
    } else {
      alert('No Alma ID !!!');
    }
  }

}
