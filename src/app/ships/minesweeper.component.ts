import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'minesweeper',
    templateUrl: './minesweeper.component.html'
})
export class MinesweeperComponent extends ShipBase
{
    @Input()
    public mineSweeping: number;

    public constructor()
    {
        super(1, 0, 1, ShipClass.E);
    }
}
