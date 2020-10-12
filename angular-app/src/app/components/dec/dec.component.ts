import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dec',
  templateUrl: './dec.component.html',
  styleUrls: ['./dec.component.css']
})
export class DecComponent implements OnInit {

  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }

}
