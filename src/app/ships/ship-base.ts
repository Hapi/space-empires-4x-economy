import { Input } from '@angular/core';
import { ShipClass } from '../basic/types';

export abstract class ShipBase
{
    @Input()
    public calculatedView: boolean;

    @Input()
    public type: string;

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

    protected constructor(
        public attackStrength: number,
        public defenseStrength: number,
        public hullSize: number,
        protected shipClass: ShipClass
    )
    {
        // Does nothing.   
    }
}