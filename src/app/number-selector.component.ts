import { Component, Input, Output, OnInit, EventEmitter, AfterContentChecked, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'number-selector',
    templateUrl: './number-selector.component.html'
})
export class NumberSelectorComponent implements OnInit, AfterContentChecked
{
    private readonly kAdditive: string = "additive";
    private readonly kDeductive: string = "deductive";

    @Input()
    public label: string = "";

    @Input()
    public startValue: number = 0;

    @Input()
    public numOfItems: number = 10;

    @Input()
    public step: number = 1;

    @Input()
    public valueCoefficient: number = 1.0;

    public type: string = this.kAdditive;

    private _additiveCoefficient: number = 1;

    @Input()
    set isAdditive(value: boolean)
    {
        this.type = value ? this.kAdditive : this.kDeductive;
        this._additiveCoefficient = value ? 1 : -1;
    }

    public _values: number[] = [];

    public _selectedValue: number;

    public value: number;

    @Output()
    public valueChanged: EventEmitter<number> = new EventEmitter<number>();

    public constructor(private cdRef: ChangeDetectorRef)
    {}

    public ngOnInit(): void
    {
        let currentValue = this.startValue;
        for (let i = 0; i < this.numOfItems; i++) {
            this._values[i] = currentValue;
            currentValue += this.step;
        }
    }

    public setValue()
    {
        this.value = this._selectedValue ? this._selectedValue * this.valueCoefficient * this._additiveCoefficient : undefined;
        this.valueChanged.emit(this.value);
    }

    public ngAfterContentChecked()
    {
        // this.value = this._selectedValue ? this._selectedValue * this.valueCoefficient : undefined;
        // this.cdRef.detach();
        // this.valueChanged.emit(this.value);
        // this.cdRef.reattach();
    }
}
 