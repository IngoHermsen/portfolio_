import { Component, Input} from '@angular/core';
import {  } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent {
  constructor (
    private scrollService: ScrollService
  ) {}

  @Input () vertical: boolean = false;

  scrollToSection(name: string) {
    this.scrollService.jumpToSection(name);
  }
}
