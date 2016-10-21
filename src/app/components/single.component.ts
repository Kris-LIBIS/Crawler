import {Component, OnInit, OnDestroy} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ResolverService} from "../services/resolver.service";
import {Result} from "../shared/result.class";
import {Subscription} from "rxjs";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'crawl-single',
  templateUrl: './single.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
`]
})
export class SingleComponent implements OnInit, OnDestroy {
  results: Result[];
  subscriptions: Subscription[];

  constructor(private resolver: ResolverService) {
  }

  ngOnInit() {
    this.results = [];
    this.subscriptions = [];
  }

  onSubmit(form: NgForm) {
    const signature = form.value.signature;
    console.log(signature);
    this.subscriptions.push(this.resolver.search('IE.dc.source', signature).subscribe(
      (data) => {
        if (data.set.length == 0) {
          this.results.push(new Result(signature, {}));
        } else {
          data.set.forEach((item) => this.results.push(new Result(signature, item)));
        }
      },
          (error) => this.results.push(new Result(signature, {}))
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
