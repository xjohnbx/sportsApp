import { Component, OnInit, Input } from '@angular/core';
import { Competition } from '~/app/Objects/Response';

@Component({
  selector: 'ns-plus-minus',
  templateUrl: './plus-minus.component.html',
  styleUrls: ['./plus-minus.component.css'],
  moduleId: module.id
})

export class PlusMinusComponent implements OnInit {
  @Input() competition: Competition;

  betOver: number = 230;
  betUnder: number = 239.11;
  projectedScore: number = 245.12;
  
  constructor() { }

  ngOnInit() {
    /*  We may need to make an observable that can communicate with this component
        when the network call in HomeComponent goes off. */
  }

}


/*

TODO:
  - We are going to make this compoenent work. At least the UI part. I believe the calculation maywork already but I want at least the UI done for this task.
  - We can also try and solve the issue today where the tabs display the last screens cells until the network call for the current tab is done.
    - Maybe we can put a loading icon on the screen ( We would hid the loading icon if we are in the network call code (start of function) and then rehide it and 
        unhide the scroll view with the cells once we are past the assignment of sportResposne))
*/