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
    public _shortLabel: string;

    ngOnInit(): void
    {
        this._startValue = this.startFromOne ? 1 : 0;
        this._zeroCompensation = this.startFromOne ? 0 : 1;
        if(this.label) {
            this._shortLabel = "";
            let tokens: string[] = this.label.split(" ");
            if(tokens.length > 1)
                tokens.forEach(t => this._shortLabel += t[0]);
            else
                this._shortLabel = this.label.substr(0, 3);
        }

    }
}