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
        super(
            "SW",
            "Mine Sweeper",
            6,
            1,
            0,
            1,
            ShipClass.E,
            [
                "Must have Mine Sweeper Technology of 1 or more to build. Ship removes some mines before combat."
            ]
        );
    }
}
