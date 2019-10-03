import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorIcon} from '../color-icon';
import {iconNames} from '../iconNames';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ci-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() iconChange: EventEmitter<ColorIcon> = new EventEmitter<ColorIcon>();
  @Input() initValue: ColorIcon;

  // icon: string;
  // color: string;
  // bgColor: string;
  iconNames: string[] = iconNames;

  constructor() { }

  ngOnInit() {
    // this.icon = this.initValue.icon;
    // this.color = this.initValue.color;
    // this.bgColor = this.initValue.bgColor;
  }

  onChange(form: NgForm) {
    this.iconChange.emit({
      icon: form.value.icon,
      color: form.value.color,
      bgColor: form.value.bgColor,
    });
  }
}
