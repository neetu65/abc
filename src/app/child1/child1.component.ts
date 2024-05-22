import { Component, Input } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {


  @Input() datafromparent:any;

  numbers = [1,2,3,4,5,6]

}
