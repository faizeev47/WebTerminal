import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback;

  constructor(
    private location: Location,
    private airlineService: AirlineService
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  submitFeedback() {
    if (!feedback || feedback === "") {
      window.alert("Type your feedback in the above text box and press 'Submit'");
      return;
    }
    this.airlineService.submitFeedback(feedback);
  }
}
