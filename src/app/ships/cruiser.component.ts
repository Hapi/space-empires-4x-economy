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
        super(
            "CA",
            "Cruiser",
            12,
            4,
            1,
            2,
            ShipClass.C,
            [
                "Must have Ship Size Technology of 3 or more to build.",
                "Can be equipped with Exploration Technology."
            ]
        );
    }
}
