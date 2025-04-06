import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidebarComponentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
