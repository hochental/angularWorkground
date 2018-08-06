import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';
import {HttpClientModule} from '@angular/common/http';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import {RouterModule, Routes} from '@angular/router';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { FormHandlerComponent } from './form-handler/form-handler.component';
import {FormsModule} from '@angular/forms';
import { EditDriverComponent } from './edit-driver/edit-driver.component';

const routes: Routes = [
  { path: 'driverDetails/:id', component: DriverComponent },
    { path: 'driverEdit/:id', component: EditDriverComponent },
  { path: 'addDriver', component: AddDriverComponent },
  { path: 'driversList', component: DriversListComponent },
  { path: '', redirectTo: '/driversList', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    DriversListComponent,
    AddDriverComponent,
    FormHandlerComponent,
    EditDriverComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
