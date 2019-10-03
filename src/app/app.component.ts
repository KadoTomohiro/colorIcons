import {Component} from '@angular/core';
import {iconNames} from './iconNames';

@Component({
  selector: 'ci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorIcons';

  color: string;
  name: string = 'home';

  iconNames: string[] = iconNames;
}
