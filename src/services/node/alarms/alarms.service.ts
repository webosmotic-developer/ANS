import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class AlarmsService {

    constructor(private _http: HttpClient) {
    }



    /**
     * Get alarms
     * */
    getAlarms() {
        const headers = new HttpHeaders().set('x-pre-api-version', '4');
        return this._http.get(environment.API_URL + 'node/alarms', {headers});
    }





}
