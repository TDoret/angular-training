import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/Http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StreamingService {

  apiBaseUrl: string = 'https://wind-bow.hyperdev.space/twitch-api/streams/';
  user: string = 'ESL_SC2';
  query: string = '?callback=JSONP_CALLBACK';

  constructor(public jsonp: Jsonp) { }

  public refresh = (username: String) : Observable<string>  => {
    const apiCall: string = this.apiBaseUrl + username/*this.user*/ + this.query;

    return this.jsonp.get(apiCall)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().err));
  }
}
