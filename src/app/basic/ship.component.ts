import { Component, Input } from '@angular/core';

@Component({
    selector: 'ship',
    templateUrl: './ship.component.html'
})
export class ShipComponent
{
    @Input()
    public type: string;

    @Input()
    public maxAttack: number = 0;

    @Input()
    public attack: number = 0;

    @Input()
    public maxDefense: number = 0;
    
    @Input()
    public defense: number = 0;

    @Input()
    public tactics: number = 0;

    @Input()
    public move: number;
}