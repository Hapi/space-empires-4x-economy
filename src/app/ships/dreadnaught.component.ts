import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'dreadnaught',
    templateUrl: './dreadnaught.component.html'
})
export class DreadnaughtComponent extends ShipBase
{
}
