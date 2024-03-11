import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  @Input() visible: boolean = false;
  @Output() closeEmit = new EventEmitter<boolean>();

  close() {
    this.closeEmit.emit(false);
  }
}
