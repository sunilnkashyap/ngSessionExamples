import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewencapsulation',
  templateUrl: './viewencapsulation.component.html',
  styleUrls: ['./viewencapsulation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewencapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
