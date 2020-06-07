import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'carrier',
    templateUrl: './carrier.component.html'
})
export class CarrierComponent extends ShipBase
{
}