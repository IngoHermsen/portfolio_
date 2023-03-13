import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) { }

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
