import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DataBearerService} from './databearer.service';
import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SearchComponent} from './search/search.component';
const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'weather:woeid',
        component: WeatherComponent
    },
    {
        path: 'search/:keyword',
        component: SearchComponent
    },
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        HeaderComponent,
        FooterComponent,
        MainContainerComponent,
        HomepageComponent,
        SearchComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false

            }
        ),
        BrowserModule,
        HttpClientModule
    ],
    providers: [DataBearerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
