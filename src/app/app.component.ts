import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'neon';
  swap(event)
  {
    console.log('fired with ',event);

    this.text=event;
  }
}
