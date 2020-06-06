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

    ngOnInit(): void
    {
        // Adds zero as a first element.
        this.prices.splice(0, 0, 0);
        // throw new Error("Method not implemented.");
    }
}