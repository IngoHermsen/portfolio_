import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { ViewportService } from '../viewport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  windowWidth = window.innerWidth;
  useSmallProfileImage: boolean = false;

  constructor(private viewportService: ViewportService) { 
    if (this.windowWidth <= 600) {
      this.viewportService.setSmallScreenWidth(true);
      this.useSmallProfileImage = true;
    }
  }

  @ViewChild('titleLogo') titleDiv!: ElementRef;

  @HostListener('document:scroll', ['$event'])

  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const titleBoundingRect = this.titleDiv.nativeElement.getBoundingClientRect();

    if (titleBoundingRect.top < 0 || titleBoundingRect.bottom > windowHeight) {
      this.viewportService.titleInView(true);
    } else {
      this.viewportService.titleInView(false);
    }
  }

}
