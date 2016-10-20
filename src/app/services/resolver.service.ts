import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class ResolverService {
  private url = 'http://resolver.libis.be';

  constructor(private _http: Http) {
    console.log('Resolver service ready ...');
  }

  search(index, term): Observable<any> {
    return this._http.get(this.url + '/r/search?query=' + index + '=' + term)
      .map(res => res.json() || {})
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
