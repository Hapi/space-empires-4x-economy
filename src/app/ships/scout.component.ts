import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'scout',
    templateUrl: './scout.component.html'
})
export class ScoutComponent extends ShipBase
{
    @Input()
    public pointDefence: number;
}