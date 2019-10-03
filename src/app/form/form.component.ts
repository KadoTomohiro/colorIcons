import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorIcon} from '../color-icon';
import {iconNames} from '../iconNames';

@Component({
  selector: 'ci-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() iconChange: EventEmitter<ColorIcon> = new EventEmitter<ColorIcon>();
  @Input() initValue: ColorIcon;

  icon: string;
  color: string;
  bgColor: string;
  iconNames: string[] = iconNames;

  constructor() { }

  ngOnInit() {
    this.icon = this.initValue.icon;
    this.color = this.initValue.color;
    this.bgColor = this.initValue.bgColor;
  }

  onChange() {
    this.iconChange.emit({
      icon: this.icon,
      color: this.color,
      bgColor: this.bgColor,
    });
  }
}
