import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngSessionExamples';
  childProp = 'initialized';
  loadComponent = false;

  sendDatatoChild() {
    this.childProp = 'This data is set by parent component.' + Math.random();
  }

  toggleComponent() {
    this.loadComponent = !this.loadComponent;
  }
}
