import { Component, Input } from '@angular/core';
import { ShipBase } from './ship-base';

@Component({
    selector: 'battle-cruiser',
    templateUrl: './battle-cruiser.component.html'
})
export class BattleCruiserComponent extends ShipBase
{
}