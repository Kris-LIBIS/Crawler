import { Component, OnInit } from '@angular/core';
import {Result} from "../shared/result.class";
import {NgForm} from "@angular/forms";
import {ResolverService} from "../services/resolver.service";

@Component({
  selector: 'crawl-range',
  templateUrl: './range.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
`]
})
export class RangeComponent implements OnInit {
  results: Result[];

  constructor(private resolver: ResolverService) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    const prefix = form.prefix;
    const from = +form.start_id;
    const to = +form.end_id;
    this.results = [];
    for (var i = from; i <= to; i++) {
      const signature = prefix + i;
      this.resolver.search('IE.dc.source', signature).subscribe(
        data => {
          if (data.set.length == 0) {
            this.results.push(new Result(signature, {}));
          } else {
            data.set.forEach((item) => this.results.push(new Result(signature, item)));
          }
        }
      );
    }
  }

}
