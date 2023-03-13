import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {

  titleScrolledOut = new Subject<boolean>();

  titleInView(value: boolean) {
    this.titleScrolledOut.next(!value);
  }

  constructor() { }
}
