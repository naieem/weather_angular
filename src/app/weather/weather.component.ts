import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataBearerService} from '../databearer.service';
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

    constructor(private route: ActivatedRoute,
                private router: Router, private databearer: DataBearerService) {
        this.route.params.subscribe((params: any) => {
            
            if (params.woeid) {
                this.databearer.getWeatherByWoeid(params.woeid).subscribe((response: any) => {

                    if (response && response.consolidated_weather) {
                        this.weatherInfo = response;
                        this.weatherDetails = this.weatherInfo.consolidated_weather;
                    }
                });
            }
        });
    }

    ngOnInit() {
        this.weatherDetails = [];
        if (this.configuration && this.weatherInfo) {
            if (this.configuration.onlyToday) {
                const todaysDate = new Date();
                const weatherDetails = this.weatherDetails;
                _.forEach(this.weatherInfo.consolidated_weather, function (value) {
                    let otherDate = new Date(value.applicable_date);
                    if (todaysDate.toDateString() === otherDate.toDateString()) {

                        weatherDetails.push(value);
                    }
                });
            } else {
                this.weatherDetails = this.weatherInfo.consolidated_weather;
            }
        }
    }

}
