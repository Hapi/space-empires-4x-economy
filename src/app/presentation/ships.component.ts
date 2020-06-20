import { Component } from '@angular/core';

@Component({
    selector: 'ships',
    templateUrl: './ships.component.html'
})
export class ShipsComponent 
{
    public _calculated: number = 0;
    public _shopOpen: boolean = false;

    public openShop()
    {
        this._shopOpen = true;
    }
}