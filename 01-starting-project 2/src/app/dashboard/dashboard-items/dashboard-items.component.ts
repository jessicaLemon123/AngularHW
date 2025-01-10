import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.css',
})
export class DashboardItemsComponent {
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
