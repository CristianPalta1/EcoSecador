import { Component, OnInit } from '@angular/core';

const pruebita = 'Hola';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // prueba2: 'hola';
    constructor() {
    }

    // prueba() {
    //     console.log(this.prueba2);
    // }
    ngOnInit() {
    }
}
