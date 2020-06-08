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
        super(5, 2, 3, ShipClass.A);
    }
}