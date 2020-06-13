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
        super(
            "BC",
            "Battlecruiser",
            15,
            5,
            1,
            2,
            ShipClass.B,
            [
                "Must have Ship Size Technology of 4 or more to build."
            ]
        );
    }
}