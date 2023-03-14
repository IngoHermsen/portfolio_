import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-gototop',
  templateUrl: './gototop.component.html',
  styleUrls: ['./gototop.component.scss']
})
export class GototopComponent {
  constructor(
    private scrollService: ScrollService
  ) { }
  imgSrc: string = '../../assets/img/icons/go_up_arrow_white.png';

  changeIconColor(color: string) {
    this.imgSrc = `../../assets/img/icons/go_up_arrow_${color}.png`
  }

  jumpToTop() {
    this.scrollService.jumpToSection('top')
  }
}
