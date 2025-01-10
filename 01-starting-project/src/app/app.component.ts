import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  showControl: boolean = false;

  onShowControl($event: boolean) {
    this.showControl = $event;
  }
}
