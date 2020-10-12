import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  counter: number = 0
  inc_label: string = "+"
  dec_label: string = "-"
  reset_label: string = "Reset"

  constructor() { }

  ngOnInit(): void {
  }

  incrementCall(event) {
    this.counter += 1
  }

  decrementCall(event) {
    this.counter -= 1
  }

  resetCall(event) {
    this.counter = 0
  }

}
