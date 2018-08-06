import { Component, OnInit } from '@angular/core';
import {DriverService} from '../services/driver.service';
import {Driver} from '../shared/driver';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers: Driver[];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.loadDrivers();

  }

  private loadDrivers(){
    this.driverService.getDriversList().subscribe(
      (driversList: Driver[])=>{
        this.drivers=driversList;
      })
  }

  removeDriver(driver: Driver) {
    if(window.confirm('Are sure you want to delete this item?')) {
      this.driverService.removeDriver(driver.id).subscribe(
        () => {
          this.loadDrivers();
        }
      );
    }
  }

}
