import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';
import { ShipClass } from '../basic/types';

@Component({
    selector: 'raider',
    templateUrl: './raider.component.html'
})
export class RaiderComponent extends ShipBase
{
    @Input()
    public cloaking: number;

    public constructor()
    {
        super(4, 0, 2, ShipClass.D);
    }
}
