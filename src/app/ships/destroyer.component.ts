import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'destroyer',
    templateUrl: './destroyer.component.html'
})
export class DestroyerComponent extends ShipBase
{
    @Input()
    public scanners: number;
}
