import {Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Result} from "../shared/result.class";
import {MenuItem} from "primeng/components/common/api";

interface MyWindow extends Window {
  myFunction(): void;
}

declare let window: MyWindow;

@Component({
  selector: 'crawl-result-list',
  templateUrl: './result-list.component.html',
  styles: []
})
export class ResultListComponent implements OnInit, OnDestroy {
  @Input() results: Result[];
  @Output() sortEvent = new EventEmitter();
  menu_items: MenuItem[];
  selectedResult: Result;
  private objectSort = require('object-property-natural-sort');

  constructor() {
  }

  ngOnInit() {
    this.menu_items = [
      // {label: 'Thumbnail', icon: 'fa-picture-o', command: (event) => this.thumbnail(this.selectedResult)},
      {label: 'Preview', icon: 'fa-search', command: (event) => this.preview(this.selectedResult)},
      {label: 'Object', icon: 'fa-barcode', command: (event) => this.viewTeneo(this.selectedResult)},
      {label: 'Alma', icon: 'fa-book', command: (event) => this.viewAlma(this.selectedResult)},
      {label: 'Delete', icon: 'fa-trash', command: (event) => this.deleteResult(this.selectedResult)}
    ];

  }

  // thumbnail(result: Result) {
  //   if (result.pid) {
  //     window.open('http://resolver.libis.be/' + result.pid + '/thumbnail', '_blank');
  //   } else {
  //     alert('No PID !!!');
  //   }
  // }
  //
  private preview(result: Result) {
    if (result.pid) {
      window.open('http://resolver.libis.be/' + result.pid + '/stream', '_blank');
    } else {
      alert('No PID !!!');
    }
  }

  private viewTeneo(result: Result) {
    if (result.pid) {
      window.open('http://resolver.libis.be/' + result.pid + '/representation', '_blank');
    } else {
      alert('No PID !!!');
    }
  }

  private viewAlma(result: Result) {
    if (result.alma_id) {
      alert('Comming soon ...');
    } else {
      alert('No Alma ID !!!');
    }
  }

  private deleteResult(result: Result) {
    this.results.splice(this.results.indexOf(result), 1);
  }

  private sort(event: any) {
    this.results.sort(this.objectSort(event.field));
    if (event.order < 0) {
      this.results.reverse();
    }
  }

  ngOnDestroy(): void {
    this.selectedResult = null;

  }
}
