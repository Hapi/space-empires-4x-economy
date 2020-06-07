import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'raider',
    templateUrl: './raider.component.html'
})
export class RaiderComponent extends ShipBase
{
    @Input()
    public cloaking: number;
}
