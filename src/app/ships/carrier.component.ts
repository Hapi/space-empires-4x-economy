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
        super(
            "CV",
            "Carrier",
            12,
            3,
            0,
            1,
            ShipClass.E,
            [
                "Can carry up to 3 Fighter squadrons.",
                "Must have Fighter Technology to build.",
                "The Carrier may participate in combat, but can not be targeted until all friendly Fighters (not just those on that particular carrier) present in the battle are destroyed."
            ]
        );
    }
}