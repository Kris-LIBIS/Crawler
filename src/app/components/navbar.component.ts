import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'crawl-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
