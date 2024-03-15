import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public visible: boolean = false;

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
