import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './dashboard/server/server.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemsComponent } from './dashboard/dashboard-items/dashboard-items.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemsComponent,
  ],
})
export class AppComponent {}
