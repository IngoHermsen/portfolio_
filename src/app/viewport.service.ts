import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class ViewportService {
  constructor(private router: Router) { }

  viewportWidth = window.innerWidth;
  smallScreenWidth = false;
  titleScrolledOut = new Subject<boolean>();

  setSmallScreenWidth(value: boolean) {
    this.smallScreenWidth = value;
  }

  titleInView(value: boolean) {
    this.titleScrolledOut.next(!value);
  }

  public jumpToSection(name: string) {
    console.log(name)
    this.router.navigate(['/main'], { fragment: name });
  }

}
