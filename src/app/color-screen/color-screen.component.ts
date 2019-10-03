import { Component, OnInit } from '@angular/core';
import {iconNames} from '../iconNames';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'ci-color-screen',
  templateUrl: './color-screen.component.html',
  styleUrls: ['./color-screen.component.css']
})
export class ColorScreenComponent implements OnInit {


  colorInput: string;
  bgColorInput: string;
  iconInput: string;


  color: string;
  bgColor: string;
  icon: string;

  iconParam$: Observable<string>;
  colorParam$: Observable<string>;
  bgColorParam$: Observable<string>;

  iconNames: string[] = iconNames;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.initForm();


    const queryParam$ = this.route.queryParamMap
      .subscribe(queryParamMap => {
        this.icon = queryParamMap.get('icon');
        this.color = queryParamMap.get('color');
        this.bgColor = queryParamMap.get('bgColor');
      });
  }

  private initForm() {
    const initParam = this.route.snapshot.queryParamMap;
    console.log(initParam);
    this.colorInput = initParam.get('color') || '#000000';
    this.bgColorInput = initParam.get('bgColor') || '#ffffff';
    this.iconInput = initParam.get('icon');
  }

  change() {
    const queryParams: Params = {
      color: this.colorInput,
      bgColor: this.bgColorInput,
      icon: this.iconInput,
    };
    this.router.navigate(    [],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
}
