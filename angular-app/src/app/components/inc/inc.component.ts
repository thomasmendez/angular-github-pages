import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent implements OnInit {

  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }

}
