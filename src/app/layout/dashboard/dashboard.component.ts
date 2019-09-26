import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    faJournalWhiss = faJournalWhills;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: '../../assets/images/carousel1.jpg',
                label: '',
                text: ''
            },
            {
                imagePath: '../../assets/images/carousel2.jpg',
                label: '',
                text: ''
            },
            // {
            //     imagePath: '../../assets/images/carrousel5.jpeg',
            //     label: '',
            //     text: ''
            // },
            // {
            //     imagePath: '../../assets/images/carrousel2.jpeg',
            //     label: '',
            //     text: ''
            // }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Seguridad del Cauca Ltda, `
            },
            {
                id: 2,
                type: 'warning',
                message: `noticias`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
