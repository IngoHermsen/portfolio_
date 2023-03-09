import { Component } from '@angular/core';

@Component({
  selector: 'app-gototop',
  templateUrl: './gototop.component.html',
  styleUrls: ['./gototop.component.scss']
})
export class GototopComponent {
  imgSrc: string = '../../assets/img/icons/go_up_arrow_white.png';

changeIconColor(color: string) {
  this.imgSrc = `../../assets/img/icons/go_up_arrow_${color}.png`
}
}
