import { Component, OnInit } from '@angular/core';
import { FightCard } from './common/models/fightcard';
import { FightCardService } from './common/services/fightcard.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    data: FightCard | undefined;
    constructor(private FightCardService: FightCardService) {}

    fetchData() {
        this.FightCardService.getData().subscribe((data: FightCard) => {
            this.data = data;
        });
    }

    ngOnInit() {
        this.fetchData();
    }
}
