import {Component, OnInit, Input} from '@angular/core';
import * as _ from 'lodash';
@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    @Input() weatherInfo: any;
    @Input() configuration: any;
    weatherDetails: any;

    constructor() {
    }

    ngOnInit() {
        this.weatherDetails = [];
        if (this.configuration.onlyToday) {
            const todaysDate = new Date();
            const weatherDetails = this.weatherDetails;
            _.forEach(this.weatherInfo.consolidated_weather, function (value) {
                let otherDate = new Date(value.applicable_date);
                if (todaysDate.toDateString() === otherDate.toDateString()) {
                    debugger;
                    weatherDetails.push(value);
                }
            });
        } else {
            this.weatherDetails = this.weatherInfo.consolidated_weather;
        }
    }

}
