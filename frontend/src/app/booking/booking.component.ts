import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Schedule } from '../schedule';

import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  journey: Schedule;
  nic: string;
  meal: string;

  const reg = new RegExp('^[0-9]{5}\-[0-9]{7}\-[0-9]{1}');

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private airlineService: AirlineService
  ) { }

  ngOnInit() {
    this.getJourney();
  }

  goBack() {
    this.location.back();
  }

  getJourney() {
    const journeyId = +this.route.snapshot.paramMap.get('journeyId');
    this.airlineService.getJourney(journeyId)
      .subscribe(journey => this.journey = journey);
  }

  reserveSeat() {
    if (!this.nic || this.nic === "") {
      window.alert("Please enter your NIC number");
      return;
    }
    if (!this.reg.test(this.nic)) {
      window.alert("Please enter the correct NIC number");
      return;
    }
    this.airlineService.reserveSeat(this.journey.journeyId, this.nic);
  }

  buyTicket() {
    if (!this.nic || this.nic === "") {
      window.alert("Please enter your NIC number");
      return;
    }
    if (!this.reg.test(this.nic)) {
      window.alert("Please enter the correct NIC number");
      return;
    }
    this.airlineService.buyTicket(this.journey.journeyId, this.nic);
  }

  requestMeal() {
    if (!this.nic || this.nic === "") {
      window.alert("Please enter your NIC number");
      return;
    }
    if (!this.reg.test(this.nic)) {
      window.alert("Please enter the correct NIC number");
      return;
    }
    if (!this.meal || this.meal === "") {
      window.alert("Please enter the name of your meal");
      return;
    }
    this.airlineService.requestMeal(this.journey.journeyId, this.nic, this.meal);
  }
}
