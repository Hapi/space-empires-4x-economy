import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'battleship',
    templateUrl: './battleship.component.html'
})
export class BattleshipComponent extends ShipBase
{
}