import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tech-view',
    templateUrl: './tech-view.component.html'
})
export class TechViewComponent implements OnInit
{
    @Input()
    public label: string;

    @Input()
    public max: number;

    @Input()
    public startFromOne: false;

    @Input()
    public value: number = 0;

    public _startValue: number;
    public _zeroCompensation: number;

    ngOnInit(): void
    {
        this._startValue = this.startFromOne ? 1 : 0;
        this._zeroCompensation = this.startFromOne ? 0 : 1;
    }
}