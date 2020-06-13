import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'scout',
    templateUrl: './scout.component.html'
})
export class ScoutComponent extends ShipBase
{
    @Input()
    public pointDefense: number;

    public constructor()
    {
        super(
            "SC",
            "Scout",
            6,
            3,
            0,
            1,
            ShipClass.E,
            [
                "May have increased firepower versus Fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3."
            ]
        );
    }
}
