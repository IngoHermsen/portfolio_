import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showOverlayMenu: boolean = false;

  @Input() burgermenu: boolean = false;
  @Input() showName: boolean = false;

  toggleBurgerMenu() {
    let bodyElement = document.getElementsByTagName('body')[0];
    this.showOverlayMenu = !this.showOverlayMenu;
    bodyElement.style.overflowY = this.showOverlayMenu ? 'hidden' : 'scroll';
  }

}
