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
        super(
            "SY",
            "Ship Yard",
            6,
            3,
            0,
            1,
            ShipClass.C,
            [
                "No maintenance cost.",
                "Allows ships to be built.",
                "May only be built at a planet that produced income.",
                "Only one may be built at any one planet per economic phase.",
                "SYs are automatically upgraded to the highest technology for free (obviously limited by hull size)."
            ]
        );
    }
}
