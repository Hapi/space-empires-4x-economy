import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CPsComponent } from './cps.component';
import { TechComponent } from './tech.component';
import { ShipsComponent } from './ships.component';
import { HeaderComponent } from './header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NumberSelectorComponent } from './number-selector.component';
import { TechSelectorComponent } from './tech-selector.component';
import { VarDirective } from './ngvar.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        CPsComponent,
        TechComponent,
        ShipsComponent,
        NumberSelectorComponent,
        TechSelectorComponent,
        VarDirective
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
