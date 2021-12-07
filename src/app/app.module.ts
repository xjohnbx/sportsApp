import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, NativeScriptCommonModule, NativeScriptHttpClientModule } from '@nativescript/angular'
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BasesComponent } from './Components/Sport_Card/Mlb_Card/Bases/bases.component'
import { HomeComponent } from './Screens/Home/home.component'
import { PlusMinusComponent } from './Components/Sport_Card/Nba_Card/Plus_Minus/plus-minus.component';
import { LabeledLabelComponent } from './Components/Helper_Components/Labeled_Label/labeled-label.component';

// Cards
import { MlbCardComponent }from './Components/Sport_Card/Mlb_Card/mlb-card.component'
import { NbaCardComponent } from './Components/Sport_Card/Nba_Card/nba-card.component'
import { NflCardComponent } from './Components/Sport_Card/Nfl_Card/nfl-card.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptHttpClientModule, NativeScriptUIListViewModule, NativeScriptCommonModule],
  declarations: [AppComponent, BasesComponent, HomeComponent, LabeledLabelComponent, MlbCardComponent, NbaCardComponent, NflCardComponent, PlusMinusComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
