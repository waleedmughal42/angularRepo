import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  sDatePickerValue: any;
  constructor() { }

  ngOnInit(): void {
    console.log("loaded");
    
  }
  cDatePickerComponent_SelectedDate(event:any)
  {
    console.log("Incomming Date picked ======>>>>>>>",event );
    this.sDatePickerValue = event;
  }

}
