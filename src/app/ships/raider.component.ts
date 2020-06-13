import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'raider',
    templateUrl: './raider.component.html'
})
export class RaiderComponent extends ShipBase
{
    @Input()
    public cloaking: number;

    public constructor()
    {
        super(
            "R",
            "Raider",
            12,
            4,
            0,
            2,
            ShipClass.D,
            [
                "Can only build when at Cloaking Technology 1+.",
                "Attacks at D4 against groups with a scanner ship, A4 without.",
                "Attack strength increases to A5/D5 if at Cloaking Technology Level 2.",
                "Raiders get +1 to their attack rating the first round of combat when attacking ships without appropriate Scanner Technology.",
                "Raiders get no benefits from their Cloaking Technology in Nebulae."
            ]
        );
    }
}
