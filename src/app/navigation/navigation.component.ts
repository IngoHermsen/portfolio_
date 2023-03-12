import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Output() burgerMenuClick = new EventEmitter<boolean>;

  @Input() burgermenu: boolean = false;
  @Input() showName: boolean = false;

  toggleBurgerMenu() {
    this.burgerMenuClick.emit();
  }
}
