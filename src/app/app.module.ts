import {LOCALE_ID, NgModule} from "@angular/core";
import localeFr from '@angular/common/locales/fr'
import {BrowserModule} from "@angular/platform-browser";


import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {FormsModule} from "@angular/forms";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ], //none standalone component
  imports: [BrowserModule, FormsModule], //standalone component
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
