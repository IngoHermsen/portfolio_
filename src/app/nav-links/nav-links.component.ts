import { Component, Input} from '@angular/core';
import { ViewportService } from '../viewport.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent {
  constructor (
    private viewportService: ViewportService
  ) {}

  @Input () vertical: boolean = false;

  public scrollToSection(name: string) {
    this.viewportService.jumpToSection(name);
  }
}
