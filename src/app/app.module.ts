import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {HeaderComponent} from './header/header.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FooterComponent} from './footer/footer.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {NewslistComponent} from './newslist/newslist.component';
import {SearchService} from './service/search.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        HeaderComponent,
        HomePageComponent,
        FooterComponent,
        MainMenuComponent,
        NewslistComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
