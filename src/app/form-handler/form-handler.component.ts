import {Component, Input, OnInit} from '@angular/core';
import {Brand, Driver, RaceTeam} from '../shared/driver';
import {DriverService} from '../services/driver.service';

@Component({
  selector: 'app-form-handler',
  templateUrl: './form-handler.component.html',
  styleUrls: ['./form-handler.component.css']
})
export class FormHandlerComponent implements OnInit {

  @Input()
  driver: Driver;

  raceTeam: RaceTeam[];
  sponsors: Brand[];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.getRacerTeamOptions();
    this.getSponsorOptions();
  }

  getRacerTeamOptions(): void{
    this.driverService.getRaceTeam().subscribe(
      (raceTeam: RaceTeam[]) =>{
        this.raceTeam=raceTeam;
      }
    )
  }

  getSponsorOptions(): void{
    this.driverService.getSponsor().subscribe(
      (sponsors: Brand[]) =>{
        this.sponsors=sponsors;
      }
    )
  }

    compareFn(c1, c2): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }

}
