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
        super(
            "DN",
            "Dreadnaught",
            24,
            6,
            3,
            3,
            ShipClass.A,
            [
                "Must have Ship Size Technology of 6 to build."
            ]
        );
    }
}
