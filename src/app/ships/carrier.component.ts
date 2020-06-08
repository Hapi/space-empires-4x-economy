import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'carrier',
    templateUrl: './carrier.component.html'
})
export class CarrierComponent extends ShipBase
{
    public constructor()
    {
        super(3, 0, 1, ShipClass.E);
    }
}