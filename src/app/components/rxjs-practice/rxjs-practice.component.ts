import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css']
})
export class RxjsPracticeComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn:any = ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let nConuter=0;
      //it takes two arguments one is the DOM element and other is the event, we use a button and capture its clicks by using Rxjs formEvent
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res =>
      {
        this.cRxJsComponent_EmitVideo('Video '+nConuter++);
      });
  }
  cRxJsComponent_EmitVideo(nIncommingCounter:any)
  {
    let ele = document.createElement('li');
    ele.innerText = nIncommingCounter;
    document.getElementById('containerId')?.appendChild(ele);
  }
  cRxJsComponent_Delete()
  {
   
  }

}
