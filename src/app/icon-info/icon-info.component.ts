import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ci-icon-info',
  templateUrl: './icon-info.component.html',
  styleUrls: ['./icon-info.component.css']
})
export class IconInfoComponent implements OnInit {
  @Input() icon: string;
  @Input() color: string;
  @Input() bgColor: string;
  constructor() { }

  ngOnInit() {
  }

}
