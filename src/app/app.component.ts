import {Component, OnInit} from '@angular/core';
import {iconNames} from './iconNames';

@Component({
  selector: 'ci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  color: string;
  bgColor: string;
  name: string;

  iconNames: string[] = iconNames;

  ngOnInit(): void {
    this.bgColor = '#ffffff';
  }
}
