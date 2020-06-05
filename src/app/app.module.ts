import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CPsComponent } from './cps.component';
import { TechComponent } from './tech.component';
import { ShipsComponent } from './ships.component';
import { HeaderComponent } from './header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        CPsComponent,
        TechComponent,
        ShipsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TabsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
