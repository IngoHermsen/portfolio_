import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ViewportService } from '../viewport.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})

export class NavigationComponent implements OnInit {
  constructor(private viewportService: ViewportService) { }

  showName: boolean = false;
  htmlElement = document.getElementsByTagName('html')[0];
  showOverlayMenu: boolean = false;

  @Input() burgermenu: boolean = false;
  @Input() toggleName: boolean = false;


  ngOnInit(): void {
    this.setNameLogo(window.innerWidth);

    this.viewportService.innerWidth.subscribe((screenWidth) => {
      this.setNameLogo(screenWidth);
      this.burgermenu = screenWidth <= 600 ? true : false;
    });

    this.viewportService.titleIsOutOfView.subscribe((value) => {
      this.toggleName = value;
    });
  }

  setNameLogo(screenWidth: number) {
    if (screenWidth <= 600) {
      this.showName = true;
      this.toggleName = false;
    } else {
      this.showName = false;
    }
  }

  toggleBurgerMenu() {
    this.showOverlayMenu = !this.showOverlayMenu;
    this.htmlElement.style.overflowY = this.showOverlayMenu ? 'hidden' : 'scroll';
  }



}
