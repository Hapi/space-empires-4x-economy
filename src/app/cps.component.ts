import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NumberSelectorComponent } from './number-selector.component';

@Component({
    selector: 'cps',
    templateUrl: './cps.component.html'
})
export class CPsComponent
{
    public total: number;
    public homePlanet: number = 0;
    public colonies1: number = 0;
    public colonies3: number = 0;
    public colonies5: number = 0;
    public minerals: number = 0;
    public msPipelines: number = 0;
    public turnOrderBid: number = 0;

    public setTotalValue()
    {
        this.total =
            this.homePlanet
                + this.colonies1
                + this.colonies3
                + this.colonies5
                + this.minerals
                + this.msPipelines
                + this.turnOrderBid;
    }
}
