import {Component} from 'angular2/core';
import {RouteParams, Router} from "angular2/router";

@Component({
    template: `
        <h1>Archive</h1>
        {{ year }} / {{ month }}
    `
})
export class ArchivesComponent {
    year: number;
    month: number;

    constructor(private _routeParams: RouteParams){
        this.year = parseInt(_routeParams.get("year"));
        this.month = parseInt(_routeParams.get("month"));
    }
}