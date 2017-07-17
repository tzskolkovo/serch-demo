import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import 'rxjs/add/operator/map';
import {Http, Response} from "@angular/http";

@Injectable()
export class SearchService {
    private url: string = 'http://tz.dev.sorokarm.ru/search?q=';

    constructor(private http: Http) {
    }

    search(term: Observable<string>) {
        return term.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term))
    }

    searchEntries(term) {
        return this.http
            .get(this.url + term )
            .map(res => res.json());
    }
}
