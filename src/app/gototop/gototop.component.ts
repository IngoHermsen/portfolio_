import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ViewportService } from '../viewport.service';

@Component({
  selector: 'app-gototop',
  templateUrl: './gototop.component.html',
  styleUrls: ['./gototop.component.scss']
})
export class GototopComponent {
  constructor(private viewportService: ViewportService) { }
  imgSrc: string = '../../assets/img/icons/go_up_arrow_white.png';

  changeIconColor(color: string) {
    this.imgSrc = `../../assets/img/icons/go_up_arrow_${color}.png`
  }

  jumpToTop() {
    this.viewportService.jumpToSection('top')
  }
}
