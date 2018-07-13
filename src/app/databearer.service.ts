import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class DataBearerService {
    apiUrl = 'http://localhost/weather.php';

    constructor(private http: HttpClient) {
    }

    // =======================================
    // get todays weather of city ============
    // =======================================
    public getWeather(city: string): Observable<any> {
        return this.http.get(this.apiUrl + '?command=search&keyword=' + city).switchMap((response: any) => {
            debugger;
            return this.http.get(this.apiUrl + '?command=location&woeid=' + response[0].woeid);
        }).map((response: any) => {
            debugger;
            return response;
        });
    }
}
