import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/Http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { UserApi } from '../models/user-api';
import { Configuration } from '../app.constants';

@Injectable()
export class ApiService {

  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'users/';

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public GetAll = (): Observable<String> => {
    console.log(this.actionUrl);
    return this._http.get(this.actionUrl).map(response => response.json());
      //.catch(this.handleError);
  }

  /*public GetSingle = (id: number): Observable<UserApi> => {
    return this._http.get(this.actionUrl + id)
      .map((response: Response) => <UserApi>response.json())
      .catch(this.handleError);
  }

  public Add = (itemName: string): Observable<UserApi> => {
    let toAdd = JSON.stringify({ ItemName: itemName });

    return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
      .map((response: Response) => <UserApi>response.json())
      .catch(this.handleError);
  }

  public Update = (id: number, itemToUpdate: UserApi): Observable<UserApi> => {
    return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
      .map((response: Response) => <UserApi>response.json())
      .catch(this.handleError);
  }

  public Delete = (id: number): Observable<Response> => {
    return this._http.delete(this.actionUrl + id)
      .catch(this.handleError);
  }*/

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
