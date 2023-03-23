import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class ViewportService {
  constructor(private router: Router) {
    addEventListener('resize', (e) => {
      this.innerWidth.next(window.innerWidth)
    })
  }

  innerWidth = new Subject<number>();
  titleIsOutOfView = new Subject<boolean>();
  
  public jumpToSection(name: string) {
    this.router.navigate(['/home'], { fragment: name });
  }

}
