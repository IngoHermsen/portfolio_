import { Component } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScrollService]
})
export class AppComponent {
  titleScrolledOut = false;

  public setTitleView($event: any): void {
    this.titleScrolledOut = $event;
  }
}
