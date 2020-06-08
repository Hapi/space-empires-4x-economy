import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'fighter',
    templateUrl: './fighter.component.html'
})
export class FighterComponent extends ShipBase
{
    @Input()
    public fighters: number;

    public constructor()
    {
        super(0, 0, 1, ShipClass.NONE);
    }
}
