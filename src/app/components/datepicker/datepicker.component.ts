import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  sDatePickerValue: any;
  sDateRangePickerValue: any;
  constructor() { }

  ngOnInit(): void {
    console.log("loaded");
    
  }
  cDatePickerComponent_SelectedDate(event:any,oIncommingFlag: any)
  {
    if(oIncommingFlag == 'range')
    {
      this.sDateRangePickerValue = event;
      console.log("Date range selected====>>>", this.sDateRangePickerValue);
      
    }
    else
    {
      console.log("Incomming Date picked ======>>>>>>>",event );
      this.sDatePickerValue = event;
    }
  }

}
