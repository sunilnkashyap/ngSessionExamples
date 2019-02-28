import { Component, SimpleChanges, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  tempConsole: string = '';
  @Input() childProp;
  @Input() tempParentInput;
  textInput;


  constructor() {
    console.log('Constructor initialized!');
    this.tempConsole += 'Constructor initialized!';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Event');
    this.tempConsole += '<br/>ngOnChanges Event';
  }

  ngOnInit() {
    console.log('ngOnInit Event');
    this.tempConsole += '<br/>ngOnInit Event';
  }

  ngDoCheck() {
    console.log('ngDoCheck Event');
    this.tempConsole += '<br/>ngDoCheck Event';
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Event');
    this.tempConsole += '<br/>ngAfterContentInit Event';
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Event');
    this.tempConsole += '<br/>ngAfterContentChecked Event';
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Event');
    this.tempConsole += '<br/>ngAfterViewInit Event';
  }


  ngOnDestroy() {
    console.log('ngOnDestroy Event');
    this.tempConsole += '<br/>ngOnDestroy Event';
  }


}
