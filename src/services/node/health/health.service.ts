import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class HealthService {

  constructor(private _http: HttpClient) {
  }

  /**
   * Get device by id.
   * */
  getHealths() {
    return this._http.get(environment.API_URL + `node/healths`);
  }

}
