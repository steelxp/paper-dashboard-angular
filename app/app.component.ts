import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
declare var $:any;

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
    ngOnInit(){
        $.getScript('../assets/js/paper-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
}
