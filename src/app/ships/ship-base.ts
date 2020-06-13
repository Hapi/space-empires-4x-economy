import { Input } from '@angular/core';
import { ShipClass, FleetSize } from '../basic/types';

export abstract class ShipBase
{
    @Input()
    public calculatedView: boolean;

    @Input()
    public id: number;

    @Input()
    public attack: number;

    @Input()
    public defense: number;

    @Input()
    public tactics: number;

    @Input()
    public move: number;

    @Input()
    public fleetSize: FleetSize;

    protected constructor(
        public type: string,
        public name: string,
        public cost: number,
        public attackStrength: number,
        public defenseStrength: number,
        public hullSize: number,
        public shipClass: ShipClass,
        public notes: string[]
    )
    {
        // Does nothing.   
    }
}