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
        super(
            "Base",
            "Base",
            12,
            7,
            2,
            3,
            ShipClass.A,
            [
                "Must have Ship Size Technology of 2 or more to build.",
                "Cannot move.",
                "Only one Base can be in any system.",
                "Bases pay no maintenance.",
                "Is not built by SYs — a producing colony can build one base/turn.",
                "Bases are automatically upgraded to the highest technology for free."
            ]
        );
    }
}