import {Component, OnInit} from '@angular/core';
import {DataBearerService} from '../databearer.service';
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    configuration: any;
    dataIstanbul: any;
    dataBerlin: any;
    dataLondon: any;
    dataHelsinki: any;
    dataDublin: any;
    dataVancouver: any;
    constructor(private databearer: DataBearerService) {
    }

    ngOnInit() {
        this.configuration = {
            shortDetails: true,
            fullDetails: false,
            onlyToday: true
        };
        this.databearer.getWeather('Istanbul').subscribe((response: any) => {
            debugger;
            this.dataIstanbul = response;
        });
        this.databearer.getWeather('Berlin').subscribe((response: any) => {
            debugger;
            this.dataBerlin = response;
        });
        this.databearer.getWeather('London').subscribe((response: any) => {
            debugger;
            this.dataLondon = response;
        });
        this.databearer.getWeather('Helsinki').subscribe((response: any) => {
            debugger;
            this.dataHelsinki = response;
        });
        this.databearer.getWeather('Dublin').subscribe((response: any) => {
            debugger;
            this.dataDublin = response;
        });
        this.databearer.getWeather('Vancouver').subscribe((response: any) => {
            debugger;
            this.dataVancouver = response;
        });
    }

}
