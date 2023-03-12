import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScrollService]
})
export class AppComponent implements OnInit {
  showOverlay: boolean = false;
  showBurgerMenu: boolean = false;
  titleScrolledOut: boolean = false;

  public screenWidth = window.innerWidth

  public toggleNavigationOverlay() {
    let bodyElement =  document.getElementsByTagName('body')[0];
    console.log(bodyElement)
    this.showOverlay = !this.showOverlay;
    bodyElement.style.overflowY = this.showOverlay ? 'hidden' : 'scroll';
  }

  public setNameLogoView($event: any): void {
    this.titleScrolledOut = $event;
  }

  ngOnInit(): void {
    if (this.screenWidth <= 650)
      this.showBurgerMenu = true;
  }


}
