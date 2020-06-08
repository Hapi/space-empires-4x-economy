import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'star-base',
    templateUrl: './base.component.html'
})
export class StarBaseComponent extends ShipBase
{
    public constructor()
    {
        super(7, 2, 3, ShipClass.A);
    }
}