import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'battleship',
    templateUrl: './battleship.component.html'
})
export class BattleshipComponent extends ShipBase
{
    public constructor()
    {
        super(
            "BB",
            "Battleship",
            20,
            5,
            2,
            3,
            ShipClass.A,
            [
                "Must have Ship Size Technology of 5 or more to build."
            ]
        );
    }
}