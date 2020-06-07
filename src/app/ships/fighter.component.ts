import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'fighter',
    templateUrl: './fighter.component.html'
})
export class FighterComponent extends ShipBase
{
    @Input()
    public fighters: number;
}
