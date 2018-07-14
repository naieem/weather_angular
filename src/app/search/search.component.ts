import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataBearerService} from '../databearer.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    weatherInfo: any;
    configuration: any;
    searchModel: any;
    noDataFound: boolean;
    activeSearchModel: any;

    constructor(private route: ActivatedRoute,
                private router: Router, private databearer: DataBearerService) {
        this.route.params.subscribe((params: any) => {

            if (params.keyword) {
                this.activeSearchModel = params.keyword;
                this.databearer.getWeather(params.keyword).subscribe((response: any) => {

                    if (response && response.consolidated_weather) {
                        this.weatherInfo = response;
                    } else {
                        this.noDataFound = true;
                    }
                }, (error) => {
                    this.noDataFound = true;
                });
            }
        });
    }

    ngOnInit() {
        this.configuration = {
            shortDetails: false,
            fullDetails: true,
            onlyToday: true
        };
    }

    search() {
        if (this.searchModel && this.searchModel != '' && (this.searchModel != this.activeSearchModel)) {
            this.weatherInfo = null;
            this.noDataFound = false;
            this.router.navigate(['search', this.searchModel]);
        }
    }

}
