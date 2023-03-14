import { Component, Input, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})

export class NavigationComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  htmlElement = document.getElementsByTagName('html')[0];
  showOverlayMenu: boolean = false;

  @Input() burgermenu: boolean = false;
  @Input() showName: boolean = false;

  ngOnInit(): void {
    this.scrollService.titleScrolledOut.subscribe((value) => {
      this.showName = !value;
    });
  }

  toggleBurgerMenu() {
    this.showOverlayMenu = !this.showOverlayMenu;
    this.htmlElement.style.overflowY = this.showOverlayMenu ? 'hidden' : 'scroll';
  }

}
