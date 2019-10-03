import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ColorIcon} from '../color-icon';

@Component({
  selector: 'ci-color-screen',
  templateUrl: './color-screen.component.html',
  styleUrls: ['./color-screen.component.css']
})
export class ColorScreenComponent implements OnInit {
  formInitIcon: ColorIcon;
  currentIcon: ColorIcon;

  iconCollection: ColorIcon[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
    this.route.queryParamMap
      .subscribe(queryParamMap => {
        this.currentIcon = {
          icon: queryParamMap.get('icon'),
          color: queryParamMap.get('color'),
          bgColor: queryParamMap.get('bgColor')
        };
      });
  }

  //
  private initForm() {
    const initParam = this.route.snapshot.queryParamMap;

    this.formInitIcon = {
      color: initParam.get('color') || '#000000',
      bgColor: initParam.get('bgColor') || '#ffffff',
      icon: initParam.get('icon'),
    };

  }

  change(icon: ColorIcon) {
    this.router.navigate(['/'],
      {
        queryParams: icon,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

  add() {
    this.iconCollection.push(this.currentIcon);
  }

  select(icon: ColorIcon) {
    const iconBuffer = Object.assign({}, icon);
    this.formInitIcon = iconBuffer;
    this.change(iconBuffer);
  }
}
