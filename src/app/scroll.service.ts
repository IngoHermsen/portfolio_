import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  constructor(
    private router: Router  ,
  ) { }

  titleScrolledOut = new Subject<boolean>();

  titleInView(value: boolean) {
    this.titleScrolledOut.next(!value);
  }

  public jumpToSection(name: string) {
    console.log(name)
    this.router.navigate(['/main'], { fragment: name });
  }

}
