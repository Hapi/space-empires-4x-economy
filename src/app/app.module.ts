import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CPsComponent } from './presentation/cps.component';
import { TechComponent } from './presentation/tech.component';
import { ShipsComponent } from './presentation/ships.component';
import { HeaderComponent } from './presentation/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NumberSelectorComponent } from './basic/number-selector.component';
import { TechSelectorComponent } from './basic/tech-selector.component';
import { VarDirective } from './directives/ngvar.directive';
import { TechViewComponent } from './basic/tech-view.component';
import { ShipComponent } from './basic/ship.component';
import { BattleCruiserComponent } from './ships/battle-cruiser.component';
import { BattleshipComponent } from './ships/battleship.component';
import { CarrierComponent } from './ships/carrier.component';
import { CruiserComponent } from './ships/cruiser.component';
import { DestroyerComponent } from './ships/destroyer.component';
import { DreadnaughtComponent } from './ships/dreadnaught.component';
import { FighterComponent } from './ships/fighter.component';
import { MinesweeperComponent } from './ships/minesweeper.component';
import { RaiderComponent } from './ships/raider.component';
import { ScoutComponent } from './ships/scout.component';
import { ShipYardComponent } from './ships/ship-yard.component';
import { StarBaseComponent } from './ships/base.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        CPsComponent,
        TechComponent,
        ShipsComponent,
        ShipComponent,
        NumberSelectorComponent,
        TechSelectorComponent,
        VarDirective,
        TechViewComponent,
        BattleCruiserComponent,
        StarBaseComponent,
        BattleCruiserComponent,
        BattleshipComponent,
        CarrierComponent,
        CruiserComponent,
        DestroyerComponent,
        DreadnaughtComponent,
        FighterComponent,
        MinesweeperComponent,
        RaiderComponent,
        ScoutComponent,
        ShipYardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        TabsModule.forRoot(),
        ButtonsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
