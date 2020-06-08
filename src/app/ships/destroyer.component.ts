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
        super(4, 0, 1, ShipClass.D);
    }
}
