import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  titleScrolledOut = false;

  titleOutOfView() {
    this.titleScrolledOut = true;
  }

  titleInView() {
    this.titleScrolledOut = false;
  }

  constructor() { }
}
