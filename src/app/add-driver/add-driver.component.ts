import { Component, OnInit } from '@angular/core';
import {Driver} from '../shared/driver';
import {DriverService} from '../services/driver.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  newDriver: Driver;

  constructor(private driverService: DriverService,
              private router: Router) {

    this.newDriver = new Driver();

  }

  ngOnInit() {
  }


  onSubmit(){
    this.driverService.addDriver(this.newDriver).subscribe(
      ()=>{
      this.newDriver=new Driver();
      this.router.navigate(['/'])
    })
  }

}
