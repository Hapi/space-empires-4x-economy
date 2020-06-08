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
    public pointDefence: number;

    public constructor()
    {
        super(3, 0, 1, ShipClass.E);
    }
}
