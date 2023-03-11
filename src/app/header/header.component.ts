import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild  } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() scrolledOutOfView = new EventEmitter<boolean>;

  // constructor(private scrollService: ScrollService) {}
  
  @ViewChild('titleLogo') titleDiv!: ElementRef;

  @HostListener('document:scroll', ['$event'])

  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const titleBoundingRect = this.titleDiv.nativeElement.getBoundingClientRect();

    if (titleBoundingRect.top < 0 || titleBoundingRect.bottom > windowHeight) {
      this.scrolledOutOfView.emit(true);
    } else {
      this.scrolledOutOfView.emit(false);
    }
  }
}
