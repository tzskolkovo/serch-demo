import {Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import {SearchService} from "../service/search.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['search.component.scss'],
    host: {
        '(document:click)': 'onClick($event)',
    },
})
export class SearchComponent implements OnInit {

    @ViewChild('searchForm') form: ElementRef;
    private results;
    private searchValue;
    private showResults = false;
    searchTerm$ = new Subject<string>();

    constructor(private searchService: SearchService, @Inject(DOCUMENT) private document: Document, private _eref: ElementRef) {

        this.searchService.search(this.searchTerm$).subscribe(results => {
                if (results.status == 'ok') {
                    this.results = results;
                    this.showResults = true;
                    this.document.body.classList.add('modal-open');
                    console.dir(this.results);
                } else {
                   this.removeResults();
                }
            },
            error => {
                this.removeResults();
            }
        )
    }

    ngOnInit() {
    }

    onSubmit() {
        this.searchTerm$.next()
    }

    onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.removeResults();
            this.form.nativeElement.reset();
        }
    }

    removeResults () {
        this.results = '';
        this.showResults = false;

        this.document.body.classList.remove('modal-open');

    }
}
