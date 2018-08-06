import { Component, OnInit } from '@angular/core';
import {Driver} from '../shared/driver';
import {DriverService} from '../services/driver.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driver: Driver;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private driverService: DriverService) { }

  ngOnInit() {
    this.getIdFromParam();
  }

  private getIdFromParam(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.driverService.getDriver(id).subscribe(
        (release) => {
          this.driver = release;
          console.log(this.driver);
        }
      );
    });
  }

}
