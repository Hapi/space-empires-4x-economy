import { Component, Input } from '@angular/core';
import { ShipBase } from '../ships/ship-base';
import { MovementTypes, gMovementTypes } from './types';

@Component({
    selector: 'ship',
    templateUrl: './ship.component.html'
})
export class ShipComponent
{
    public _movementTypes: MovementTypes = gMovementTypes;

    @Input()
    public type: string;

    @Input()
    public shipBase: ShipBase;

    public _calculated: number = 0;
}