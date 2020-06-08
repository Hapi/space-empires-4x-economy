import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'battle-cruiser',
    templateUrl: './battle-cruiser.component.html'
})
export class BattleCruiserComponent extends ShipBase
{
    public constructor()
    {
        super(5, 1, 2, ShipClass.B);
    }
}