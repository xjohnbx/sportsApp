import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-labeled-label',
  templateUrl: './labeled-label.component.html',
  styleUrls: ['./labeled-label.component.css'],
  moduleId: module.id
})

export class LabeledLabelComponent implements OnInit {
  @Input() title: string;
  @Input() labelContent: string;
  @Input() shouldShowUnderline: boolean = false;

  constructor() { }

  ngOnInit() {

  }
}