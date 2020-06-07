import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'minesweeper',
    templateUrl: './minesweeper.component.html'
})
export class MinesweeperComponent extends ShipBase
{
    @Input()
    public mineSweeping: number;
}
