import { Component, Input, OnInit } from '@angular/core';
import { ViewportService } from '../viewport.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})

export class NavigationComponent implements OnInit {
  constructor(private viewportService: ViewportService) { }

  screenWidth = window.innerWidth;
  showName: boolean = false;
  htmlElement = document.getElementsByTagName('html')[0];
  showOverlayMenu: boolean = false;

  @Input() burgermenu: boolean = false;
  @Input() toggleName: boolean = false;


  ngOnInit(): void {
    if (this.screenWidth <= 600) {
      this.showName = true;
    } else {
      this.viewportService.titleScrolledOut.subscribe((value) => {
        this.toggleName = !value;
      });
    }
  }

  toggleBurgerMenu() {
    this.showOverlayMenu = !this.showOverlayMenu;
    this.htmlElement.style.overflowY = this.showOverlayMenu ? 'hidden' : 'scroll';
  }

}
