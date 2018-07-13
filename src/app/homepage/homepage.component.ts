import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    searchModel: any;

    constructor(private router: Router, private databearer: DataBearerService) {
    }

    ngOnInit() {
        this.configuration = {
            shortDetails: true,
            fullDetails: false,
            onlyToday: true
        };
        this.databearer.getWeather('Istanbul').subscribe((response: any) => {

            this.dataIstanbul = response;
        });
        this.databearer.getWeather('Berlin').subscribe((response: any) => {

            this.dataBerlin = response;
        });
        this.databearer.getWeather('London').subscribe((response: any) => {

            this.dataLondon = response;
        });
        this.databearer.getWeather('Helsinki').subscribe((response: any) => {

            this.dataHelsinki = response;
        });
        this.databearer.getWeather('Dublin').subscribe((response: any) => {

            this.dataDublin = response;
        });
        this.databearer.getWeather('Vancouver').subscribe((response: any) => {

            this.dataVancouver = response;
        });
    }

    gotoSearchPage() {
        this.router.navigate(['search', this.searchModel]);
    }

}
