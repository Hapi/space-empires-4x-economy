import { Input } from '@angular/core';

export abstract class ShipBase
{
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
    public pointDefence: number;
}