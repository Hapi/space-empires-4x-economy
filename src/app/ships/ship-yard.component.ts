import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'ship-yard',
    templateUrl: './ship-yard.component.html'
})
export class ShipYardComponent extends ShipBase
{
    public constructor()
    {
        super(3, 0, 1, ShipClass.C);
    }
}
