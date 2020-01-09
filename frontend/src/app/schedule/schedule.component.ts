import { Component, OnInit } from '@angular/core';

import { Schedule } from '../schedule';

import { AirlineService } from '../airline.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule[];

  constructor(
    private airlineService: AirlineService
  ) { }

  ngOnInit() {
  }

  getSchedule() {
    this.airlineService.getSchedule()
      .subscribe(schedule => this.schedule = schedule);
  }

}
