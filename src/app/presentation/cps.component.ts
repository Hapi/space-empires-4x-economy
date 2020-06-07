import { Component } from '@angular/core';
import { SpaceWreck, SpaceWreckKeys } from '../basic/types';
import { $enum } from "ts-enum-util";


@Component({
    selector: 'cps',
    templateUrl: './cps.component.html'
})
export class CPsComponent
{
    SpaceWreck = $enum(SpaceWreck);
    private _total: number;
    public get total(): number
    {
        return this._total ? this._total : undefined;
    }

    private _homePlanet: number = 0;
    public get homePlanet(): number
    {
        return this._homePlanet ? this._homePlanet : 0;
    }
    public set homePlanet(value: number)
    {
        this._homePlanet = value ? value : undefined;
    }

    private _colonies1: number = 0;
    public get colonies1(): number
    {
        return this._colonies1 ? this._colonies1 : 0;
    }
    public set colonies1(value: number)
    {
        this._colonies1 = value ? value : undefined;
    }

    private _colonies3: number = 0;
    public get colonies3(): number
    {
        return this._colonies3 ? this._colonies3 : 0;
    }
    public set colonies3(value: number)
    {
        this._colonies3 = value ? value : undefined;
    }

    private _colonies5: number = 0;
    public get colonies5(): number
    {
        return this._colonies5 ? this._colonies5 : 0;
    }
    public set colonies5(value: number)
    {
        this._colonies5 = value ? value : undefined;
    }

    private _minerals: number = 0;
    public get minerals(): number
    {
        return this._minerals ? this._minerals : 0;
    }
    public set minerals(value: number)
    {
        this._minerals = value ? value : undefined;
    }

    private _msPipelines: number = 0;
    public get msPipelines(): number
    {
        return this._msPipelines ? this._msPipelines : 0;
    }
    public set msPipelines(value: number)
    {
        this._msPipelines = value ? value : undefined;
    }

    private _turnOrderBid: number = 0;
    public get turnOrderBid(): number
    {
        return this._turnOrderBid ? this._turnOrderBid : 0;
    }
    public set turnOrderBid(value: number)
    {
        this._turnOrderBid = value ? value : undefined;
    }
    
    public spaceWreck: SpaceWreckKeys = "NONE";

    public setTotalValue()
    {
        this._total =
            this.homePlanet
                + this.colonies1
                + this.colonies3
                + this.colonies5
                + this.minerals
                + this.msPipelines
                + this.turnOrderBid;
    }
}
