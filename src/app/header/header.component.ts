import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  windowWidth = window.innerWidth;
  smallImage: boolean = false;

  constructor(private scrollService: ScrollService) { 
    if (this.windowWidth <= 600) {
      console.log(this.windowWidth);
      console.log(this.smallImage)
      this.smallImage = true;
    }
  }

  @ViewChild('titleLogo') titleDiv!: ElementRef;

  @HostListener('document:scroll', ['$event'])

  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const titleBoundingRect = this.titleDiv.nativeElement.getBoundingClientRect();

    if (titleBoundingRect.top < 0 || titleBoundingRect.bottom > windowHeight) {
      this.scrollService.titleInView(true);
    } else {
      this.scrollService.titleInView(false);
    }
  }

}
