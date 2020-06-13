import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'destroyer',
    templateUrl: './destroyer.component.html'
})
export class DestroyerComponent extends ShipBase
{
    @Input()
    public scanners: number;

    public constructor()
    {
        super(
            "DD",
            "Destroyer",
            9,
            4,
            0,
            1,
            ShipClass.D,
            [
                "Must have Ship Size Technology of 2 or more to build.",
                "Can detect cloaked ships (raiders) depending on level of scanning technology."
            ]
        );
    }
}
