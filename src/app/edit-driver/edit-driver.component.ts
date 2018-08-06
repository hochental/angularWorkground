import { Component, OnInit } from '@angular/core';
import {Driver} from '../shared/driver';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DriverService} from '../services/driver.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  editDriver: Driver;

  constructor(private route: ActivatedRoute,
              private driverService: DriverService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id=parseInt(params.get("id"));
      this.driverService.getDriver(id).subscribe( (editDriver) =>
      {
        this.editDriver=editDriver;
    });
    })
  }

  onSubmit(){
    this.driverService.editDriver(this.editDriver).subscribe(
        ()=>{
          this.router.navigate(['/']);
        }
    )
  }

}
