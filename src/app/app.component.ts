import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportService } from './viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ViewportService]
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ) { 


  }
  showBurgerMenu: boolean = false;
  titleScrolledOut: boolean = false;

  public screenWidth = window.innerWidth

  public setNameLogoView($event: any): void {
    this.titleScrolledOut = $event;
  }

  ngOnInit(): void {
    this.router.navigate([''])
    if (this.screenWidth <= 650)
      this.showBurgerMenu = true;
  }
}
