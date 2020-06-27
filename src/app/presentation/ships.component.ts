import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
    selector: 'ships',
    templateUrl: './ships.component.html'
})
export class ShipsComponent implements AfterViewInit
{
    public _calculated: number = 0;
    public _shopOpen: boolean = false;
    public _disableCalculatedValuesCheckbox: boolean = false;

    public ngAfterViewInit(): void
    {
        this.detectScreenSize();
    }

    @HostListener("window:resize", [])
    private onResize()
    {
        this.detectScreenSize();
    }    
    public openShop()
    {
        this._shopOpen = true;
    }

    private detectScreenSize()
    {
        let width: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this._disableCalculatedValuesCheckbox = width <= 360;
    }
}