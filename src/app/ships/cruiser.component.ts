import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'cruiser',
    templateUrl: './cruiser.component.html'
})
export class CruiserComponent extends ShipBase
{
    @Input()
    public exploration: number;
}
