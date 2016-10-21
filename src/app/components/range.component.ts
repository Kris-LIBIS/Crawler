import {Component, OnInit, OnDestroy} from '@angular/core';
import {Result} from "../shared/result.class";
import {NgForm} from "@angular/forms";
import {ResolverService} from "../services/resolver.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'crawl-range',
  templateUrl: './range.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
`]
})
export class RangeComponent implements OnInit, OnDestroy {
  results: Result[];
  count: number;
  max: number;
  subscriptions: Map<string, Subscription>;

  constructor(private resolver: ResolverService) { }

  ngOnInit() {
    this.subscriptions = new Map;
    this.max = 0;
    this.count = 0;
  }

  onSubmit(form: any) {
    const prefix = form.prefix;
    const from = +form.start_id;
    const to = +form.end_id;
    this.results = [];
    this.max = to - from + 1;
    this.count = 0;
    for (let i = from; i <= to; i++) {
      const signature = prefix + i;
      this.subscriptions[signature] =
        this.resolver.search('IE.dc.source', signature).subscribe(
        data => {
          if (data.set.length == 0) {
            this.results.push(new Result(signature, {}));
          } else {
            data.set.forEach((item) => this.results.push(new Result(signature, item)));
          };
          this.count++;
        },
          (error) => console.log('Error ' + signature +' : ' + error),
          () => {
            this.subscriptions[signature].unsubscribe();
            this.subscriptions.delete(signature);
          }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions.clear();
  }
}
