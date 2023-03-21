import { Component, ElementRef, OnInit, HostListener, Output, ViewChild } from '@angular/core';
import { ViewportService } from '../viewport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  smallScreenMode: boolean = false;

  constructor(public viewportService: ViewportService) {
  }

  ngOnInit(): void {
    this.smallScreenMode = window.innerWidth <= 600 ? true : false;
    this.viewportService.innerWidth.subscribe((screenWidth) => {
      this.smallScreenMode = screenWidth <= 600 ? true : false;
    })
  }

  @ViewChild('titleLogo') titleDiv!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const titleBoundingRect = this.titleDiv.nativeElement.getBoundingClientRect();

    if ((titleBoundingRect.top <= 0 || titleBoundingRect.bottom >= windowHeight) && !this.smallScreenMode) {
      this.viewportService.titleIsOutOfView.next(true);
    } else {
      this.viewportService.titleIsOutOfView.next(false);
    }
  }
}

