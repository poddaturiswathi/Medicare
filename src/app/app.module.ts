import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustComponent } from './addcust/addcust.component';
import { CuslistComponent } from './cuslist/cuslist.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { MedicenListComponent } from './medicen-list/medicen-list.component';
import { MedicenimajesComponent } from './medicenimajes/medicenimajes.component';
import { EditcustComponent } from './editcust/editcust.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustComponent,
    CuslistComponent,
    CustdetailsComponent,
    MedicenListComponent,
    MedicenimajesComponent,
    EditcustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
