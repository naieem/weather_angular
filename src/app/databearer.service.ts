import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class DataBearerService {
    apiUrl = 'http://localhost/weather.php';

    constructor(private http: HttpClient) {
    }

    public getWeather(city: string): Observable<any> {
        return this.http.get(this.apiUrl + '?command=search&keyword=' + city).switchMap((response: any) => {

            return this.http.get(this.apiUrl + '?command=location&woeid=' + response[0].woeid);
        }).map((response: any) => {

            return response;
        });
    }

    public getWeatherByWoeid(weid: any): Observable<any>{
        return this.http.get(this.apiUrl + '?command=location&woeid=' + weid).map((response: any)=>{
            return response;
        });
    }
}
