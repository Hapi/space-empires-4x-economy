import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'dreadnaught',
    templateUrl: './dreadnaught.component.html'
})
export class DreadnaughtComponent extends ShipBase
{
    public constructor()
    {
        super(6, 3, 3, ShipClass.A);
    }
}
