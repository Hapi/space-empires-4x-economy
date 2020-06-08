import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'cruiser',
    templateUrl: './cruiser.component.html'
})
export class CruiserComponent extends ShipBase
{
    @Input()
    public exploration: number;

    public constructor()
    {
        super(4, 1, 2, ShipClass.C);
    }
}
