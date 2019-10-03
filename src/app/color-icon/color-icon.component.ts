import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ci-color-icon',
  templateUrl: './color-icon.component.html',
  styleUrls: ['./color-icon.component.css']
})
export class ColorIconComponent implements OnInit {
  @Input() color: string;
  @Input() bgColor: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
