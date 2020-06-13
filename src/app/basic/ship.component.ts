import { Component, Input, OnInit } from '@angular/core';
import { ShipBase } from '../ships/ship-base';
import { MovementTypes, gMovementTypes } from './types';
import { notStrictEqual, notEqual } from 'assert';

@Component({
    selector: 'ship',
    templateUrl: './ship.component.html'
})
export class ShipComponent implements OnInit
{
    public _movementTypes: MovementTypes = gMovementTypes;

    @Input()
    public type: string;

    @Input()
    public shipBase: ShipBase;

    public _calculated: number = 0;
    public _helpHtml: string = "";

    public ngOnInit(): void
    {
        if(this.shipBase.notes && this.shipBase.notes.length > 0) {
            if(this.shipBase.notes.length == 1)
                this._helpHtml = this.shipBase.notes[0];
            else {
                this._helpHtml = "<ul>";
                this.shipBase.notes.forEach((note: string) => { this._helpHtml += `<li>${note}</li>` });
                this._helpHtml += "</ul>"
            }
        }
    }
}