import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tech-selector',
    templateUrl: './tech-selector.component.html'
})
export class TechSelectorComponent implements OnInit
{
    @Input()
    public label: string = "";

    @Input()
    public startFromOne: false;

    @Input()
    public prices: number[];

    public _selectedValue: number;
    public _startValue: number;

    ngOnInit(): void
    {
        // Adds zero as a first element.
        this.prices.splice(0, 0, 0);
        
        this._startValue = this.startFromOne ? 1 : 0;
    }

    public setValue()
    {
        // if(this._selectedValue == undefined) {
        //     if(this._previousValue != undefined)
        //         this._selectedValue = this._previousValue;
        // }
        // else {
        //     this._previousValue = this._selectedValue;
        // }
        // console.log("MIU: ", this._selectedValue, " : ", this._previousValue);
    }
}